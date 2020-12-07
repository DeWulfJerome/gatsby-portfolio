import React, { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import styled from 'styled-components';
import { vec3, mat4 } from 'gl-matrix';

const StyledCanvas = styled.canvas`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

export default function PointCloud() {
  const canvasEl = useRef(null);
  const tabletSizeReached = useMediaQuery('only screen and (max-width: 768px)');
  const [animationId, setAnimationId] = useState(undefined);

  useEffect(() => {
    if (animationId) {
      window.cancelAnimationFrame(animationId);
    }
    const canvas = canvasEl.current;

    canvas.width = tabletSizeReached ? window.innerWidth : 1200;
    canvas.height = window.innerHeight - 120;
    const gl = canvas.getContext('webgl');
    if (!gl) {
      return;
    }

    function spherePointCloud(pointCount) {
      let points = [];
      for (let i = 0; i < pointCount; i++) {
        const r = () => Math.random() - 0.5;
        const inputPoint = [r(), r(), r()];
        const outputPoint = vec3.normalize(vec3.create(), inputPoint);

        points.push(...outputPoint);
      }
      return points;
    }

    // create vertexdata
    const vertexData = spherePointCloud(tabletSizeReached ? 4000 : 9000);

    //create vertex buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    // load vertexdata into buffer
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(vertexData),
      gl.STATIC_DRAW
    );

    // create vertex shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(
      vertexShader,
      `
        precision mediump float;

        attribute vec3 position;
        varying vec3 vColor;

        uniform mat4 matrix;

        void main() {
            vColor = vec3(position.xy, 1);
            gl_Position = matrix * vec4(position, 1);
            gl_PointSize = 1.0;
        }
        `
    );
    gl.compileShader(vertexShader);
    // Make fragment shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(
      fragmentShader,
      `
        precision mediump float;
        varying vec3 vColor;

        void main(){
            gl_FragColor = vec4(vColor,1);
        }
        `
    );
    gl.compileShader(fragmentShader);
    // create program
    const program = gl.createProgram();
    // Attach shaders to program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // enable vertex attributes
    const positionLocation = gl.getAttribLocation(program, `position`);
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    // draw
    gl.useProgram(program);
    gl.enable(gl.DEPTH_TEST);

    const uniformLocations = {
      matrix: gl.getUniformLocation(program, 'matrix')
    };

    const modelMatrix = mat4.create();
    const viewMatrix = mat4.create();
    const projectionMatrix = mat4.create();

    mat4.perspective(
      projectionMatrix,
      (75 * Math.PI) / 180, // Vertical field of view
      canvas.width / canvas.height, // aspect w/h
      1e-4, // near cull distance
      1e4 // far cull distance
    );
    const mvMatrix = mat4.create();
    const mvpMatrix = mat4.create();
    mat4.translate(modelMatrix, modelMatrix, [0, 0, 0]);
    mat4.translate(viewMatrix, viewMatrix, [
      0,
      0.1,
      tabletSizeReached ? 2.5 : 2
    ]);
    mat4.invert(viewMatrix, viewMatrix);

    function animate() {
      const requestId = requestAnimationFrame(animate);
      setAnimationId(requestId);
      mat4.rotateY(modelMatrix, modelMatrix, 0.003);
      mat4.rotateX(modelMatrix, modelMatrix, 0.001);

      mat4.multiply(mvMatrix, viewMatrix, modelMatrix);
      mat4.multiply(mvpMatrix, projectionMatrix, mvMatrix);

      gl.uniformMatrix4fv(uniformLocations.matrix, false, mvpMatrix);
      gl.drawArrays(gl.POINTS, 0, vertexData.length / 3);
    }

    animate();
  }, [canvasEl, tabletSizeReached]);
  return <StyledCanvas ref={canvasEl}></StyledCanvas>;
}
