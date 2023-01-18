var canvas = document.getElementById("faceDrawing");

var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 200;
var startAngle = 0;
var endAngle = 2 * Math.PI;


                     function clearCanvas(){
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                     }
                     function drawFace() {
                        ctx.beginPath();
                        ctx.arc(x, y, radius, startAngle, endAngle);
                        ctx.stroke();
                        ctx.fillStyle = "orange";
                        ctx.fill();
                      }
                     function drawSmile(){
                        var x = (canvas.width / 2);
                        var y = 280
                        var radius = 100;
                        var startAngle = 2 * Math.PI;
                        var endAngle = 1 * Math.PI;
                        ctx.beginPath();
                        ctx.arc(x, y, radius, startAngle, endAngle);
                        ctx.lineWidth = 8;
                        // line color

                        ctx.strokeStyle = 'black';
                        ctx.stroke();
                        // ctx.y(-50);
                     }
                     function drawRightEye(){
                        var centerX = 40;
                        var centerY = 0;
                        var radius = 10;
                        
                        ctx.save();
                        // I tested out coordinates for the best position
                        ctx.translate((canvas.width / 2) + 40 , (canvas.height / 3));
                        ctx.scale(.5, 1);
                        // draws an oval
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                        // restore to original state
                        ctx.restore();
                        ctx.fillStyle = 'black';
                        ctx.fill();
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'black';
                        ctx.stroke();
                     }
                     function drawLeftEye(){
                        //left eye
                        var centerX = -40;
                        var centerY = 0;
                        var radius = 10;
                        // save state
                        ctx.save();
                        ctx.translate((canvas.width / 2) - 40, canvas.height / 3);
                        ctx.scale(.5, 1);
                        // draws oval
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                        ctx.restore();
                        
                        ctx.fillStyle = 'black';
                        ctx.fill();
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'black';
                        ctx.stroke();
                     }  
                     function drawRightOuterEye(){
                        var centerX = 40;
                        var centerY = 0;
                        var radius = 30;

                        ctx.save();
                        ctx.translate((canvas.width / 2) + 20 , (canvas.height / 3));
                        ctx.scale(1, .75);
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                        ctx.restore();

                        ctx.fillStyle = 'white';
                        ctx.fill();
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'black';
                        ctx.stroke();
                        }
                     
                     function drawLeftOuterEye(){
                        var centerX = -40;
                        var centerY = 0;
                        var radius = 30;
                        ctx.save();
                        ctx.translate((canvas.width / 2) - 20 , (canvas.height / 3));
                        ctx.scale(1, .75);
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                        ctx.restore();
                        ctx.fillStyle = 'white';
                        ctx.fill();
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = 'black';
                        ctx.stroke();
                        }

                        function drawNose(){
                           ctx.moveTo((canvas.width / 2) ,(canvas.height / 2) - 50 );
                           ctx.lineTo((canvas.width / 2)- 50, (canvas.height / 2) +50);
                           ctx.lineTo((canvas.width / 2), (canvas.height / 2) + 50);
                           ctx.stroke(); 
                        } 
                        function drawTwoTeeth(){
                           ctx.beginPath();
                           //left tooth

                           ctx.fillStyle = 'black'
                           ctx.fillRect((canvas.width / 2) - 23, (canvas.height / 2) + 131, 28, 41);
                           ctx.fillStyle = "white"
                           ctx.fillRect((canvas.width / 2) - 20, (canvas.height / 2) + 130, 22, 40);
                           //right tooth

                           ctx.fillStyle = 'black'
                           ctx.fillRect((canvas.width / 2) + 2, (canvas.height / 2) + 129, 28, 43);
                           ctx.fillStyle = "white"
                           ctx.fillRect((canvas.width / 2) + 5, (canvas.height / 2) + 130, 22, 40);
                        } 
                        function drawEars(){
                           //left ear

                           ctx.beginPath();
                           ctx.arc((x/4)+20, (y/4) + 20, radius/2.5, startAngle, endAngle);
                           ctx.stroke();
                           ctx.fillStyle = "orange";
                           ctx.fill();
                           //left inner ear

                           ctx.beginPath();
                           ctx.arc((x/4)+20, (y/4) + 20, radius/3, startAngle, endAngle);
                           ctx.stroke();
                           ctx.fillStyle = "pink";
                           ctx.fill();

                           //right ear
                           ctx.beginPath();
                           ctx.arc(500-(x/4)-20, (y/4) + 20, radius/2.5, startAngle, endAngle);
                           ctx.stroke();
                           ctx.fillStyle = "orange";
                           ctx.fill();
                           //right inner ear

                           ctx.beginPath();
                           ctx.arc(500-(x/4)-20, (y/4) + 20, radius/3, startAngle, endAngle);
                           ctx.stroke();
                           ctx.fillStyle = "pink";
                           ctx.fill();
                        }
                        function sadSmile(){
                           var x = canvas.width / 2;
                           var y = 400
                           var radius = 40;
                           var startAngle = 1.1 * Math.PI;
                           var endAngle = 1.9 * Math.PI;

                           ctx.beginPath();
                           ctx.arc(x, y, radius, startAngle, endAngle);
                           ctx.lineWidth = 8;

                           // line color
                           ctx.strokeStyle = 'black';
                           ctx.stroke();

                        }
                        function growBeard(){
                           ctx.fillStyle = 'black'
                           ctx.fillRect((canvas.width / 2) +15, (canvas.height / 2) + 181, 10, 41);
                           ctx.fillStyle = 'black'
                           ctx.fillRect((canvas.width / 2)-5, (canvas.height / 2) + 181, 10, 41);  
                           ctx.fillRect((canvas.width / 2) - 25, (canvas.height / 2) + 181, 10, 41);  
                        }
                        function closedRightEye(){
                           ctx.moveTo((canvas.width / 2) + 20 , (canvas.height / 3));
                           ctx.lineTo((canvas.width / 2) + 90, (canvas.height / 3));
                           ctx.lineWidth = 7
                        }
                        function closedLeftEye(){
                           ctx.moveTo((canvas.width / 2) - 20 , (canvas.height / 3));
                           ctx.lineTo((canvas.width / 2) - 90, (canvas.height / 3));
                           ctx.lineWidth = 7

                        }

                        function drawNeutralMouth(){
                           ctx.lineWidth = 8
                           ctx.beginPath();
                           ctx.moveTo((canvas.width / 2) -100, (canvas.height / 2) +100);
                           ctx.lineTo((canvas.width / 2) + 100, (canvas.height / 2) + 100);
                           ctx.stroke();
                           // line color

                           ctx.strokeStyle = 'black';
                           ctx.stroke();
                           // ctx.y(-50);
                        }
                        function drawHappyFace(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           drawEyebrows();
                           drawRightOuterEye();
                           drawLeftOuterEye();
                           drawRightEye();
                           drawLeftEye();
                           drawNose();
                           drawTwoTeeth();
                           drawSmile();
                        }
                        function happyFaceWithRightEyeClosed(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           drawEyebrows();
                           drawLeftOuterEye();
                           drawLeftEye();
                           closedRightEye();
                           drawNose();
                           drawTwoTeeth(); 
                           drawSmile();
                        }
                        function happyFaceWithLeftEyeClosed(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           drawEyebrows();
                           drawRightOuterEye();
                           drawRightEye();
                           closedLeftEye();
                           drawNose();
                           drawTwoTeeth(); 
                           drawSmile();

                        }

                        function drawSadFace(){
                           clearCanvas();
                           drawEars()
                           drawFace();
                           drawEyebrows();
                           drawRightOuterEye();
                           drawLeftOuterEye();
                           drawRightEye();
                           drawLeftEye();
                           drawNose();
                           sadSmile();
                        }
                        function sadFaceWithRightEyeClosed(){
                           clearCanvas();
                           drawEars()
                           drawFace();
                           closedRightEye();
                           drawNose();
                           sadSmile();
                        }
                        
                        function sadFaceWithLeftEyeClosed(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           closedLeftEye();
                           drawNose();
                           sadSmile();
                        }
                        
                        function drawNeutralFace(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           drawEyebrows();
                           drawRightOuterEye();
                           drawLeftOuterEye();
                           drawRightEye();
                           drawLeftEye();
                           drawNose();
                           drawNeutralMouth();
                        }

                        function neutralFaceWithRightEyeClosed(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           closedRightEye();
                           drawNose();
                           drawNeutralMouth();
                        }

                        function neutralFaceWithLeftEyeClosed(){
                           clearCanvas();
                           drawEars();
                           drawFace();
                           closedLeftEye();
                           drawNose();
                           drawNeutralMouth();
                        }
                        
                        function drawEyebrows() {
                              // set the line width and color for the eyebrows
                              ctx.lineWidth = 4;
                              ctx.strokeStyle = 'black';
                            
                              // draw the left eyebrow above the left eye
                              ctx.beginPath();
                              ctx.moveTo(canvas.width / 2 - 90, canvas.height / 3 - 50);
                              ctx.lineTo(canvas.width / 2 - 30, canvas.height / 3 - 50);
                              ctx.stroke();
                            
                              // draw the right eyebrow above the right eye
                              ctx.beginPath();
                              ctx.moveTo(canvas.width / 2 + 90, canvas.height / 3 - 50);
                              ctx.lineTo(canvas.width / 2 + 30, canvas.height / 3 - 50);
                              ctx.stroke();
                            
                           }
                           
                        

                        
                        function getCoordinates(){
                           canvas.addEventListener('click', function(event) {
                              var x = event.clientX - canvas.offsetLeft
                              var y = event.clientY - canvas.offsetTop
                              
                              console.log('The coordinates are: ' + x + ', ' + y);
                              
                              
                              //left eye conditions to close for happy face
                              if (x >= 161 && x <= 218 && y <= 187 && y >= 145 ){
                                 clearCanvas();
                                 happyFaceWithLeftEyeClosed();
                              }
                              
                              //right eye conditional to close for happy face
                              
                              if (x>= 283 && x<= 338 && y<= 187 && y>=145  ){
                                 clearCanvas();
                                 happyFaceWithRightEyeClosed();
                              }
                              //chin conditionals for beard

                              if (x >= 178 && x <= 324 && y <= 451 && y >= 420 ){
                                 growBeard();
                              }
                              
                           });
                        }

                        
                        // resizing function is to help with responsiveness on smaller devices
                        // I multiplied all the coodrinates by 0.6, as 500px * 0.6 = 300, which is the width when the canvas has become smaller.

                        // function resizing(){
                        //    var canvas = document.getElementById("faceDrawing")
                        //    canvas.addEventListener('click', function(event) {
                        //       if (canvas.width = 300){
                        //          var x = event.clientX - canvas.offsetLeft
                        //          var y = event.clientY - canvas.offsetTop
                        //          if (x >= 98 && x <= 129 && y <= 110 && y >= 89 ){
                        //             clearCanvas();
                        //             happyFaceWithLeftEyeClosed();
                        //          }
                                 
                        //          //right eye conditional to close for happy face
                                 
                        //          else if (x>= 165 && x<= 202 && y<= 110 && y>=89 ){
                        //             clearCanvas();
                        //             happyFaceWithRightEyeClosed();
                        //          }
                        //          else if (x >= 104 && x <= 196 && y <= 272 && y >= 250 ){
                        //             growBeard();
                        //          }


                        //       }


                        //    });
                        // }
                              

// ***************************Main part (Calling these functions)**************************************************
                           getCoordinates();
                           drawHappyFace();
                        
                        
                        
                        
                        
                        
                        
                        
                        

