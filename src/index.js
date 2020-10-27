//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDom from "react-dom";
const Createdby="Created by Prabhudas";
const Copyright="Copyright 2019";
ReactDom.render(<div><p>{Createdby}</p><p>{Copyright}</p></div>,
  document.getElementById("root")
  
  
  )
