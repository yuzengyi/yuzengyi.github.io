<script setup>
</script>
<template>
    <div class="content">
        <div class="title">&nbsp; &nbsp;欢迎来到可视化部分</div>
        <!-- <canvas id="right_angle_formula_canvas" @mousedown="samIllustration3DMouseDown" @mouseup="samIllustration3DMouseUp" @mousemove="samIllustration3DMouseXY" style="background-color: rgb(255, 255, 255); width: 1152px; height: 500px;"></canvas> -->
        <!-- <div class="figurediv">
        <a id="fig_intro_right_angle_triangle"></a>
            <canvas id="right_angle_formula_canvas" width="706" height="435" style="background-color: rgb(255, 255, 255); width: 471px; height: 290.52px;"></canvas>
            <div id="right_angle_formula_canvas_equation_0_" class="equations_each" style="left: 274px; top: 1868px;">
            <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax_SVG" id="MathJax-Element-25-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>&amp;#x03B8;</mi></math>" role="presentation" style="font-size: 100%; display: inline-block; position: relative;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.09ex" height="2.09ex" viewBox="0 -798.4 469.5 900" role="img" focusable="false" style="vertical-align: -0.236ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-3B8" x="0" y="0"></use></g></svg><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>θ</mi></math></span></span>
            </div>
            <div id="right_angle_formula_canvas_equation_1_" class="equations_each" style="left: 299px; top: 1908px;">
            <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax_SVG" id="MathJax-Element-26-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>a</mi></math>" role="presentation" style="font-size: 100%; display: inline-block; position: relative;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.23ex" height="1.397ex" viewBox="0 -499.8 529.5 601.3" role="img" focusable="false" style="vertical-align: -0.236ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-61" x="0" y="0"></use></g></svg><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi></math></span></span>
            </div>
            <div id="right_angle_formula_canvas_equation_2_" class="equations_each" style="left: 390px; top: 1794px;">
            <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax_SVG" id="MathJax-Element-27-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>b</mi></math>" role="presentation" style="font-size: 100%; display: inline-block; position: relative;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="0.998ex" height="1.975ex" viewBox="0 -748.6 429.5 850.2" role="img" focusable="false" style="vertical-align: -0.236ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-62" x="0" y="0"></use></g></svg><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi></math></span></span>
            </div>
            <div id="right_angle_formula_canvas_equation_3_" class="equations_each" style="left: 291px; top: 1789px;">
            <span class="MathJax_Preview" style="color: inherit;"></span><span class="MathJax_SVG" id="MathJax-Element-28-Frame" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>c</mi></math>" role="presentation" style="font-size: 100%; display: inline-block; position: relative;"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.007ex" height="1.397ex" viewBox="0 -499.8 433.5 601.3" role="img" focusable="false" style="vertical-align: -0.236ex;" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-63" x="0" y="0"></use></g></svg><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>c</mi></math></span></span>
            </div>
        </div> -->
        <video :src="videoUrl[index]" controls></video>
        <div style="text-align:center"><button v-if="index!=0" @click="prev">上一个</button> <button v-if="index!=4" @click="next">下一个</button><button @click="returnBack">返回</button></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                videoUrl:["src/static/video/v1.mp4","src/static/video/v2.mp4","src/static/video/3.mp4","src/static/video/4.mp4","src/static/video/5.mp4"],
                index: 0,
            }
        },
        methods:{
            returnBack(){
                this.$router.push({
                    path:'KnowledgeExplain'
                })
            },
            prev:function(){
                this.index--;
            },
            next:function(){
                this.index++;
            },
        },
        created(){

        },
    //     samIllustration3DMouseDown(e){
    //         //debug_current_event = "Event: mouse down";
    //         if (!e) e = window.event;
    //         var canvas = e.currentTarget;
    //         var samobj = canvas.mSamObj;

    //         // only allow one mouse to be down at a time
    //         samobj.mLeftMouseIsDown  = 0;
    //         samobj.mRightMouseIsDown = 0;

    //         // handle incompatibilities between browsers
    //         if(e.which) {
    //          if(e.which <= 1)  samobj.mLeftMouseIsDown  = 1;  // left mouse is 1
    //          else              samobj.mRightMouseIsDown = 1;  // let all other buttons works as right button
    //         }
    //          else if(e.button)
    //         {
    //             if(e.button <= 1) samobj.mLeftMouseIsDown  = 1;  // left mouse is 1
    //             else              samobj.mRightMouseIsDown = 1;  // let all other buttons works as right button
    //         }

    //         //console.log(" MOUSE --> left: " + samobj.mLeftMouseIsDown + "  right: " + samobj.mRightMouseIsDown);

    //         samobj.mMouseCoordX = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
    //         samobj.mMouseCoordY = e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop);
    //         // make sure we have no delta X and delta Y on mouse movement
    //         samobj.mPrevMouseCoordX = samobj.mMouseCoordX;
    //         samobj.mPrevMouseCoordY = samobj.mMouseCoordY;

    //         samobj.mSamIllustration3DObj.fFindInteractionPoint();
    //         samobj.mSamIllustration3DObj.fMoveInteractionPoint();

    //         // this is how we safely request for rendering of the scene...
    //         samobj.mSamIllustration3DObj.fPostRedisplay(true);
    //         samSafeRequestAnimFrame(samBigRenderLoop);
    //     },
    //     samIllustration3DMouseUp(e){
    //         //debug_current_event = "Event: mouse up";
    //         if (!e) e = event;
    //         var canvas;
    //         if(e.currentTarget) canvas = e.currentTarget;
    //         else canvas = e.srcElement;
    //         //var canvas = e.srcElement;                                  // hack! This is the canvas... for mouseUp TODO: should be e.currentTarget???
    //         //var canvas = e.currentTarget;                                  // hack! This is the canvas... for mouseUp TODO: should be e.currentTarget???
    //         var samobj = canvas.mSamObj;
    //         samobj.mLeftMouseIsDown  = 0;
    //         samobj.mRightMouseIsDown = 0;
    //         samobj.mPressedOn2DPointIdx = -1;                                 // no point is pressed on any longer
    //         samobj.mPressedOn3DPointIdx = -1;
    //         samobj.mMouseCoordX = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
    //         samobj.mMouseCoordY = e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop);
    //         // make sure we have no delta X and delta Y on mouse movement
    //         samobj.mPrevMouseCoordX = samobj.mMouseCoordX;
    //         samobj.mPrevMouseCoordY = samobj.mMouseCoordY;

    //         // check for clicking on the camera icon
    //         samobj.mSamIllustration3DObj.fCheckCameraIconClick();

    //         // this is how we safely request for rendering of the scene...
    //         samobj.mSamIllustration3DObj.fPostRedisplay(true);
    //         samSafeRequestAnimFrame(samBigRenderLoop);
    //     },
    //     samIllustration3DMouseXY(e){
    //     //debug_current_event = "Event: mouse xy";
    //     if (!e) e = event;
    //     e.preventDefault();
    //     var canvas = e.currentTarget;
    //     var samobj = canvas.mSamObj;
    //     samobj.mPrevMouseCoordX = samobj.mMouseCoordX;
    //     samobj.mPrevMouseCoordY = samobj.mMouseCoordY;
    //     samobj.mMouseCoordX = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
    //     samobj.mMouseCoordY = e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop);
        
    //     samobj.mSamIllustration3DObj.fMoveInteractionPoint();

    //     // this is how we safely request for rendering of the scene...
    //     samobj.mSamIllustration3DObj.fPostRedisplay(true);
    //     samSafeRequestAnimFrame(samBigRenderLoop);
    // }

    }
</script>
<style scoped>
    .title{
        text-align: center;
        font-size: xx-large;
    }
    button{
        width: 100px;
        height: 50px;
        margin-left:30px;
        border-radius: 10px;
        border:none;
        background-color:rgb(210, 255, 255);
    }
    button:hover{
        background-color:rgb(176, 255, 255);
    }
    .title{
        font-size:x-large;
        text-align: center;
        margin: 0 auto;
        height:50px;
        line-height: 50px;
        background-image: url(../static/image/tabbar.jpg);
        background-repeat:no-repeat;
        background-position: 50%;
        color:white;
    }
    video {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 10px;
    border: 1px solid #dddddd;
    width:1190px; 
    height:670px; 
}
canvas {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 10px;
    border: 1px solid #dddddd;
}
</style>