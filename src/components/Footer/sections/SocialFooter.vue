<template>
  <div id="SocialFooter">
    <div id="Right">
      <h4 class="q-ma-none">نیاز به راهنمایی دارید؟</h4>
      <p class="q-pt-xs">
        برای مشاهده تخصصی و رایگان در مورد خرید بیمه نامه با کارشناسان ما ارتباط
        بر قرار کنید
      </p>
    </div>
    <div id="left">
      <ul>
        <li>
          <a class="facebook" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a class="twitter" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a class="instagram" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a class="google" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fab fa-google-plus" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialFooter",
};
</script>

<style scoped>
#SocialFooter {
  position: relative;
 top: 45px;
  background-color: #5f259f;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  border-radius: 15px;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
  width: 97%;
  margin: 10px auto;
}
#left {
  background-color: #36334a;
  border-radius: 15px;
  padding: 20px 5px;
}
#Right {
  text-align: right;
  padding: 0 10px;
}
@media screen and (max-width: 1216px) {
  #Right {
    text-align: center;
  }
}
@media screen and (max-width: 520px) {
  ul {
    flex-direction: column;
  }
  ul span {
    display: none;
  }
  #Right h4 {
    font-size: 23pt;
  }
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
}
ul li {
  list-style: none;
}
ul li a {
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  line-height: 70px;
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  color: white;
  margin: 0 30px;
  transition: 0.5s;
}
ul li a span {
  position: absolute;
  transition: transform 0.5s;
}
ul li a span:nth-child(1),
ul li a span:nth-child(3) {
  width: 100%;
  height: 3px;
  background: white;
}
ul li a span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: right;
}
ul li a:hover span:nth-child(1) {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s;
}

ul li a span:nth-child(3) {
  bottom: 0;
  left: 0;
  transform-origin: left;
}
ul li a:hover span:nth-child(3) {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4) {
  width: 3px;
  height: 100%;
  background: white;
}
ul li a span:nth-child(2) {
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: bottom;
}
ul li a:hover span:nth-child(2) {
  transform: scale(1);
  transform-origin: top;
  transition: transform 0.5s;
}
ul li a span:nth-child(4) {
  top: 0;
  right: 0;
  transform: scale(0);
  transform-origin: top;
}
ul li a:hover span:nth-child(4) {
  transform: scale(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}

.facebook {
  color: #265aca;
}

.facebook span {
  background: #3b5998;
}

.twitter {
  color: #1da1f2;
}

.twitter span {
  background: #1da1f2;
}

.instagram {
  color: #c32aa3;
}

.instagram span {
  background: #c32aa3;
}

.google {
  color: #dd4b39;
}
.google span {
  background: #dd4b39;
}
ul li a .twitter {
  color: #1da1f2;
}
ul li a:hover:nth-child(3) {
  color: #c32aa3;
}
ul li a:hover:nth-child(4) {
  color: #dd4b39;
}
</style>
