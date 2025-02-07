import React, {useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

function App() {

  return (
    <div className="flex flex-row h-screen w-screen justify-center">
      <Canvas>
        <Experience />  
      </Canvas>      
    </div>
  );
}

export default App;
