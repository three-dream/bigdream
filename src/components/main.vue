<template>
  <div class="overflow">
    <el-container>
      <el-header>
        <div class="overflow_main">
          <div class="overflow_top">
            <div class="overflow_left" @click="denglu()">
              <a >{{ mingzi }}</a>
              <span><a >注册</a></span>
            </div>
            <div class="overflow_right">
              <ul>
                <li class="active">首页</li>
                <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                <li @click="gouwuches()">
                  <i class="el-icon-thirdgouwuche1"></i
                  >购物车
                </li>
                <li v-if="shoucangjia">
                  <i class="el-icon-thirdshoucangjia"></i>收藏夹
                </li>
              </ul>
            </div>
          </div>
          <div class="overflow_bottom">
            <div class="overflow_logo">
              <img src="../assets/logo.jpg" alt="" />
            </div>
            <div class="overflow_search">
              <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="visibilty"></div>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="overflow_content">
          <div class="overflow_tabber">
            <div class="overflow_list">
              <ul>
                <li>全部分类</li>
                <li>首页</li>
                <li>数码</li>
                <li>手机</li>
                <li>图书音像</li>
                <li>装修家具</li>
              </ul>
            </div>
          </div>
          <div class="overflow_middle">
            <div class="list">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <i
                    class="el-icon-thirdgouwuche1"
                    style="margin-right: 20px"
                  />{{ item.a }}<span>&gt;</span>
                </li>
              </ul>
            </div>
            <div class="lunbo">
              <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="370px">
                  <el-carousel-item
                    v-for="(item, index) in imglist"
                    :key="index"
                  >
                    <img :src="item.src" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            
          </div>
          <!-- <div class="imgbuju">
            <div class="imagetitle">
              <div class="imageleft">活动<span>(每期活动优惠享不停)</span></div>
              <div class="imagesort">
                <ul>
                  <li>更多活动&gt;</li>
                </ul>
              </div>
            </div>
            <div class="imagelist">
              <img src="../assets/first.png" alt="" />
              <img src="../assets/second.png" alt="" />
              <img src="../assets/third.png" alt="" />
              <img src="../assets/fourth.png" alt="" />
            </div>
          </div>
          <div class="phone" @click="phone()">
            <div class="phometiotle">
              <div class="phoneleft">手机专场<span>(手机风暴)</span></div>
              <div class="phonesort">
                <ul>
                  <li v-for="(item, index) in lists" :key="index">
                    {{ item.a }}
                  </li>

                  <li>更多手机&gt;</li>
                </ul>
              </div>
            </div>
            <div class="phoneimage">
              <div class="first">
                <img src="../assets/phone1.png" alt="" />
              </div>
              <div class="second">
                <div class="third">
                  <img src="../assets/phone2.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="fourth">
                  <img src="../assets/phone3.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="fifth">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone4.jpg" alt="" />
              </div>
              <div class="sixth">
                <div class="seven">
                  <img src="../assets/phone5.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="eight">
                  <img src="../assets/phone6.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="nine">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone7.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="computer" @click="computer()">
            <div class="computertiotle">
              <div class="computerleft">手机专场<span>(手机风暴)</span></div>
              <div class="computersort">
                <ul>
                  <li v-for="(item, index) in listes" :key="index">
                    {{ item.a }}
                  </li>
                  <li>更多电脑&gt;</li>
                </ul>
              </div>
            </div>
            <div class="computerimage">
              <div class="first">
                <img src="../assets/phone1.png" alt="" />
              </div>
              <div class="second">
                <div class="third">
                  <img src="../assets/phone2.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="fourth">
                  <img src="../assets/phone3.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="fifth">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone4.jpg" alt="" />
              </div>
              <div class="sixth">
                <div class="seven">
                  <img src="../assets/phone5.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="eight">
                  <img src="../assets/phone6.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="nine">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone7.jpg" alt="" />
              </div>
            </div>
          </div> -->
          <!-- <hr style="height:1px;border:none;border-top:1px dashed #0066CC;" /> -->

<div class="list_model" @click="phone()">
		<div class="list_title clearfix">
			<h3 class="fl" id="model01" colour="#ff0000">特价优惠</h3>
			<a href="#" class="goods_more fr" id="fruit_more"></a>
		</div>

		<div class="goods_con clearfix">
			<div class="goods_banner fl"><img src="../assets/phone9.jpg">
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">iphone8</a></h4>
					<a href="#"><img src="../assets/phone8.jpg"></a>
					<div class="prize">¥ 5796.00</div>
				</li>
				<li>
					<h4><a href="#">三星s9</a></h4>
					<a href="#"><img src="../assets/10.jpg"></a>
					<div class="prize">¥ 5699.00</div>
				</li>
				<li>
					<h4><a href="#">小米note8</a></h4>
					<a href="#"><img src="../assets/99.jpg"></a>
					<div class="prize">¥ 1199.00</div>
				</li>
				<li>
					<h4><a href="#">iphone12</a></h4>
					<a href="#"><img src="../assets/11.jpg"></a>
					<div class="prize">¥ 6299.00</div>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="list_model" @click="computer()">
		<div class="list_title clearfix">
			<h3 class="fl" id="model01">手机/电脑</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="#">MAC</a>
				<a href="#">vivo</a>
				<a href="#">opppo</a>
			</div>
			<a href="#" class="goods_more fr" id="fruit_more">查看更多 ></a>
		</div>

		<div class="goods_con clearfix">
			<div class="goods_banner fl"><img src="../assets/phone2.jpg">
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">红米note8</a></h4>
					<a href="#"><img src="../assets/99.jpg"></a>
					<div class="prize">¥ ？？？？</div>
				</li>
				<li>
					<h4><a href="#">三星s9</a></h4>
					<a href="#"><img src="../assets/10.jpg"></a>
					<div class="prize">¥ ？？？？</div>
				</li>
				<li>
					<h4><a href="#">iPhone12</a></h4>
					<a href="#"><img src="../assets/phone8.jpg"></a>
					<div class="prize">¥ ？？？？</div>
				</li>
				<li>
					<h4><a href="#">iPhone8</a></h4>
					<a href="#"><img src="../assets/11.jpg"></a>
					<div class="prize">¥ ？？？？</div>
				</li>
			</ul>
		</div>
	</div>
</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import "../components/main.less";
export default {
  data() {
    return {
      shoucangjia: false,
      mingzi: "",
      input3: "",
      list: [],
      lists: [],
      listes: [],
      imglist: [
        { src: require("../assets/1.jpg") },
        { src: require("../assets/2.jpg") },
        { src: require("../assets/3.jpg") },
        { src: require("../assets/4.jpg") },
      ],
    };
  },
  methods: {
    gouwuches() {
      this.$router.push("/money");
    },
    denglu() {
      this.$router.push("/login");
    },
    zhuce() {
      this.$router.push("/login");
    },
    phone() {
      this.$router.push("/information");
    },
    computer() {
      this.$router.push("/information");
    },
    get() {
      var _this = this;
      _this.$http
        .post("/api/user/main", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.list = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    post() {
      var _this = this;
      _this.$http
        .post("/api/user/sort", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.listes = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    computerget() {
      var _this = this;
      _this.$http
        .post("/api/user/sorts", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.listes = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    var _this = this;
    _this.get();
    _this.post();
    _this.computerget();
    var a = _this.$route.params.Id;
    _this.mingzi = a ? a : "请登录";
    _this.shoucangjia = a ? true : false;
  },
};
</script>
<style lang="less" scoped>
.center_con{width:1200px;height:270px;margin:0 auto;}
.subnav{width:198px;height:270px;border-left:1px solid #eee;border-right:1px solid #eee;}
.subnav li{height:44px;border-bottom:1px solid #eee;background:url('../assets/arrow-next.png') 178px -257px no-repeat #fff;}

.subnav li a{display:block;height:44px;line-height:44px;text-indent:71px;font-size:14px;color:#333}
.subnav li a:hover{color:#ff8800}

.subnav li .fruit{background:url('../assets/arrow-next.png') 28px 0px no-repeat;}
.subnav li .seafood{background:url('../assets/arrow-next.png') 28px -43px no-repeat;}
.subnav li .meet{background:url('../assets/arrow-next.png') 28px -86px no-repeat;}
.subnav li .egg{background:url('../assets/arrow-next.png') 28px -132px no-repeat;}
.subnav li .vegetables{background:url('../assets/arrow-next.png') 28px -174px no-repeat;}
.subnav li .ice{background:url('../assets/arrow-next.png') 28px -220px no-repeat;}

.list_model{width:1453px;height:340px;margin-left: 12%;}
.list_title{height:40px;border-bottom:2px solid #ffff00}
.list_title h3{height:40px;line-height:20px;font-size:20px;color:#ff0000;font-weight:bold;}
.list_title .subtitle{height:20px;line-height:20px;margin-top:15px;}
.list_title .subtitle span{color:#666;margin:0 10px 0 20px;}
.list_title .subtitle a{color:#666;margin:0 5px;}
.list_title .subtitle a:hover,.goods_more:hover{color:#ff8800}
.goods_more{height:20px;margin-top:15px;color:#666}

.goods_con{height:300px;}
.goods_banner{width:200px;height:300px;display: flex;}
.goods_banner img{width:200px;height:300px;}

.goods_list{width:1000px;height:299px;border-bottom:1px solid #ededed}
.goods_list li{height:299px;width:249px;border-right:1px solid #ededed;float:left;margin-left: 8%;}
.goods_list li:hover{width:248px;height:297px;border:1px solid gold;}
.goods_list li:hover img{opacity:0.8}

.goods_list li h4{width:200px;height:50px;margin:20px auto 0;text-align:center;}
.goods_list li h4 a{font-size:14px;color:#666;font-weight:normal;line-height:24px;}
.goods_list li h4 a:hover{color:#ff8800}

.goods_list li img{display:block;width:180px;height:180px;margin:0 auto;}
.goods_list li .prize{text-align:center;font-size:20px;color:#c40000;margin-top:5px;}

.slide{width:760px;height:270px;position:relative;overflow:hidden;}
.slide .slide_pics{position:relative;left:0;top:0;width:760px;height:270px;}
.slide .slide_pics li{width:760px;height:270px;position:absolute;left:0;top:0}
.slide .prev,.slide .next{width:17px;height:23px;background:url('../assets/arrow-next.png') left -388px no-repeat;position:absolute;left:11px;top:122px;cursor:pointer;}
.slide .next{background-position:left -428px;left:732px;}
.points{width:100%;height:11px;position:absolute;left:0;top:250px;text-align:center;}
.points li{display:inline-block;width:11px;height:11px;margin:0 5px;background-color:#9f9f9f;border-radius:50%;cursor:pointer;}
.points li.active{background-color:#cecece}
.clearfix:before,.clearfix:after{content:"";display:table}
.clearfix:after{clear:both;}
.clearfix{zoom:1}
.adv{width:240px;height:270px; overflow:hidden; background-color:gold;}
.adv a{display:block;float:left;}
.fl{float:left;display: flex;list-style: none;}
.fr{float:right}
</style>
