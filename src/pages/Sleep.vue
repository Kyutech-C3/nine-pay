<template>
  <body class="hachimaru">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap" rel="stylesheet">

    <div class="HP_container">
      
      <div class="HP">
        <!-- <div class="HP_title">HP</div> -->
        45
      </div>
      <div class="cloud_container">
        <img src="../assets/sleep_cloud_svg.svg" class="cloud">
      </div>
    </div>
    
    <div>
      <div class="border-radius1"></div>
     <div class="border-radius2"></div>
     <div class="border-radius3"></div>
    </div>

    <div class="bed">
      <img src="../assets/sleep_bed_svg.svg">
      <!-- <img src="../assets/sleep_bed.png"> -->
    </div>

    <div class="box7">
      <p>寝るともらえる<br>HP(ﾊﾝﾓｯｸﾎﾟｲﾝﾄ)<br> 
        1min = 1HP</p>
    </div>

    <!-- <div>
      <h1 class="blue">
        寝るともらえる<br>HP(ﾊﾝﾓｯｸﾎﾟｲﾝﾄ)<br> 
        1min = 1HP
      </h1>
    </div> -->
  </body>
</template>

<script>

</script>

<style>
body {
  background-color: #bae8e8;
}
.sleep {
  /* background-color: #fffffe; */
}
.bed img {
  /* max-width: 50vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 60%; */
  /* max-width: 80%;
  height: auto; */
  position:relative;
  max-width: 80%;
  top: 170px;

}
.HP_container {
  font-size: 9rem;
  font-weight: bold;
  text-align: left;
  position: relative;
}
.HP {
  text-align: center;
  position:absolute;
  z-index: 10;
  left: 50%;
  transform: translate(-50%,-50%);
  top: 40%;
}
@media screen and (max-width: 500px) {
  .HP_container {
    font-size: 7rem;
  }
}
.HP img {
  z-index: -10;
}
.HP_title {
  
}
.HP div {
  font-size: 2rem;
}
.blue {
  color:blue;
  /* background-color: rgb(189, 189, 245); */
  position: absolute;
  top: 75%;
}
.cloud {
  max-width: 100%;
  height: auto;
}
@media screen and (min-width: 500px) {
  .cloud {

    max-width: 500px;
  }
}
.cloud_container {
  text-align: center;
}
.border-radius1 {
  width: 90px;
  height: 70px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  z-index: 1;
  position:absolute;

  left: 75%;
  transform: translate(-50%,-50%);
  top: 36%;
}
.border-radius2 {
  width: 55px;
  height: 55px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position:absolute;
  z-index: 10;
  left: 90%;
  transform: translate(-50%,-50%);
  top: 45%;
}
.border-radius3 {
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position:absolute;
  z-index: 10;
  left: 85%;
  transform: translate(-50%,-50%);
  top: 55%;
}
.hachimaru {
  font-family: 'Hachi Maru Pop', cursive;
}
.box8 {
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #232323;
    background: #fff8e8;
    border-left: solid 10px #ffc06e;
    position: absolute;
    top: 80%;
}
.box8 p {
    margin: 0; 
    padding: 0;
}
.box7{
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #474747;
    background: whitesmoke;/*背景色*/
    border-left: double 7px #4ec4d3;/*左線*/
    border-right: double 7px #4ec4d3;/*右線*/
    position: relative;
    top: 150px;
}
.box7 p {
    margin: 0; 
    padding: 0;
}
</style>
