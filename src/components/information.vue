<template>
    <div class="over_informations">
      <el-container>
        <el-header>
          <div class="overflow_main">
            <div class="overflow_top">
              <div class="overflow_left">
                <a href="">请登录</a>
                <span><a href="">注册</a></span>
              </div>
              <div class="overflow_right">
                <ul>
                  <li class="active" @click="shouye()">首页</li>
                  <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                  <li @click="gouwuche()"><i class="el-icon-thirdgouwuche1" ></i>购物车</li>
                  <li><i class="el-icon-thirdshoucangjia"></i>我的收藏</li>
                </ul>
              </div>
            </div>
            <div class="overflow_bottom">
              <div class="overflow_logo">
                <img src="../assets/logo.jpg" alt="">
              </div>
              <div class="overflow_search">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              </div>
              <div class="visibilty"></div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="nav">
        <div class="w">
          <div class="dropdown fl">
            <div class="dt">商品分类</div>
          </div>
          <!--右侧导航-->
          <div class="navitems fl">
            <ul>
              <li><a href="#">家居</a></li>
              <li><a href="#">箱包</a></li>
              <li><a href="#">玩具</a></li>
              <li><a href="#">数码</a></li>
              <li><a href="#">手机</a></li>
              <li><a href="#">图书音像</a></li>
              <li><a href="#">汽车</a></li>
              <li><a href="#">装修家具</a></li>
            </ul>
          </div>
        </div>
      </div>
        <!--nav结束-->
        <!--详情页内容部分-->
        <div class="de_container w">
          <!--面包屑导航-->
          <div class="crumb_wrap">
            <a href="#">{{list.first}} </a>
            〉<a href="#">{{list.second}} </a>
            〉<a href="#">{{list.third}}</a>
            〉<a href="#">{{list.fourth}}</a>
          </div>
          <!--产品介绍模块-->
          <div class="product_intro clearfix">
            <!--左侧预览区域-->
            <div class="magnify">
              <!-- 左边产品图片区域 -->
                <div class="choose" ref="choose">
            <div class="content" ref="content" @mousemove="handleMove" @mouseout="handleOut">
                <img src="../assets/phone6.jpg" />
                <div class="shadow" ref="shadow"></div>
            </div>
            <ul id="listshow">
                <li class="selected">
                    <img src="../assets/phone6.jpg" alt="">
                </li>
            </ul>
        </div>
        <div class="larger" ref="larger">
            <img src="../assets/phone6.jpg" ref="big" />
        </div>
              </div>
          <!-- </div> -->
            <!--右侧产品详细区域-->
            <div class="itemInfo_wrap fr" v-if="aaa">
              <div class="sku_name">{{list.name}}</div>
              <div class="summary">
                <dl class="summary_price">
                  <dt>价格</dt>
                  <dd>
                    <i class="price">￥{{list.price}}</i>
                    <div class="mark">{{list.pingjia}}</div>
                  </dd>
                </dl>
                
          
                <dl class="choose_color">
                  <dt>选择颜色</dt>
                  <dd>
                    <ul style="float:left">
                    <li v-for="(item,index) in lists" :key="index"><a href="javascript:;" class="current">{{item.a}}</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl class="choose_version">
                  <dt>选择版本</dt>
                  <dd>
                    <a href="javascript:;" class="current">电信版</a>
                    <a href="javascript:;">通用版</a>
                  </dd>
                </dl>
                <dl class="choose_type">
                  <dt>购买方式</dt>
                  <dd>
                    <a href="javascript:;" class="current">官方标配</a>
                    <a href="javascript:;">8+256G</a>
                  </dd>
                </dl>
                <div class="choose_btns">
                  <a href="#" class="addcar">立即购买</a>
                  <a href="#" class="addcar" @click="addgouwuche()">加入购物车</a>
                </div>
              </div>
            </div>
          </div>
          <!--产品细节模块product_detail-->
        </div>
        
        <img style="    width: 1000px;
    border: 0;
    align-self: center;
    vertical-align: middle;
    margin-left: 23%;" src="../assets/phone2.jpg" alt="">
    <img style="    width: 1000px;
    border: 0;
    align-self: center;
    vertical-align: middle;
    margin-left: 23%;" src="../assets/phone2.jpg" alt="">
        <!--footer开始-->
        </el-main>
      </el-container>
    </div>
</template>
<script>
import '../components/information.less'
import $ from 'jquery'
export default {
  props: {
    middleImgWidth: {
      default: 350,
      type: Number
    }, // 产品图片宽
    middleImgHeight: {
      default: 400,
      type: Number
    }, // 产品图片高
    thumbnailHeight: {
      default: 100,
      type: Number
    }, // 缩略图容器高度
    imgList: Array, // 图片数据
    zoom: {
      default: 2, // 缩略比例,放大比例
      type: Number
    }
  },
  data () {
    return {
      input3: '',
      pictureList: [
        { url: 'http://mp.ofweek.com/Upload/News/Img/member645/201711/17170046839337.jpg' },
        { url: 'http://image.buy.ccb.com/merchant/201703/904919627/1522929521661_4.jpg' },
        { url: 'http://image5.suning.cn/uimg/b2c/newcatentries/0070130691-000000000826244625_5_800x800.jpg' },
        { url: 'http://img12.360buyimg.com/n5/s450x450_jfs/t9952/98/2269407420/279171/6137fe2f/59f28b2bN6959e086.jpg' },
        { url: 'http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2017/1213/A4037864F6728F006B67AAEC51EC8A485F320FD2_size93_w1024_h734.jpeg' },
        { url: 'http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2017/1213/A4037864F6728F006B67AAEC51EC8A485F320FD2_size93_w1024_h734.jpeg' }
      ],
      middleImg: '',
      bigImg: '',
      isShade: false,
      isBig: false,
      initX: 0,
      aaa: true,
      lists: [],
      list: [],
      initY: 0,
      leftX: 0,
      topY: 0,
      middleLeft: 0,
      itemWidth: 80
    }
  },
  created () {
    if (this.imgList && this.imgList.length) {
      this.pictureList = this.imgList
    }
    this.middleImg = this.pictureList[0].url
    // 计算缩略图的宽度,默认是显示4张图片,两边箭头的宽度和为50
    this.itemWidth = (this.middleImgWidth - 50) / 4
  },
  mounted () {
    this.get()
    
    this.getphone()
    this.$nextTick(() => {
      // 容器的高
      const imgWidth = this.middleImgHeight + this.thumbnailHeight + 20
      // 设置容器宽高
      $('.magnify').css({
        width: this.middleImgWidth,
        height: imgWidth
      })
      // 设置产品图宽高
      $('.middle_img').css({
        width: this.middleImgWidth,
        height: this.middleImgHeight
      })
      // 设置移动阴影图宽高
      $('.middle_img .shade').css({
        width: this.middleImgWidth / this.zoom,
        height: this.middleImgHeight / this.zoom
      })
      // 设置缩略图容器高
      $('.carousel').css({
        height: this.thumbnailHeight
      })
      // 设置每个缩略图宽
      $('.picture_item').css({
        width: this.itemWidth
      })
      // 设置放大后图片容器的宽高,left
      $('.right_contanier').css({
        left: this.middleImgWidth,
        width: imgWidth,
        height: imgWidth
      })
      // 设置放大图片的宽高(图片的放大倍数)
      $('.right_contanier .big_img').css({
        width: imgWidth * this.zoom,
        height: imgWidth * this.zoom
      })
    })
  },
  methods: {
  addgouwuche(){
        var _this = this
        _this.$router.push({
                      name: 'money',//这里必须有，没有的话传过去的值为undefined
                      path: '/money',
                      params: {
                        Id: '1'
                      }
                  })
    },
     // 产品图片鼠标移入事件,显示阴影,显示大图
   getPosition: function(element){ 
            var dc = document, 
            rec = element.getBoundingClientRect(), 
            x = rec.left, // 获取元素相对浏览器视窗window的左、上坐标 
            y = rec.top; 
            // 与html或body元素的滚动距离相加就是元素相对于文档区域document的坐标位置 
            x += dc.documentElement.scrollLeft || dc.body.scrollLeft; 
            y += dc.documentElement.scrollTop || dc.body.scrollTop; 
            return { 
                left: x, 
                top: y 
            }; 
        },
        handleMove(evt) {
            var larger = this.$refs.larger;
            var shadow = this.$refs.shadow;
            var big = this.$refs.big;
            var pos = this.getPosition(this.$refs.choose);
            var shadowRect = shadow.getBoundingClientRect();
            var bigRect = big.getBoundingClientRect();
            var contentRect = this.$refs.content.getBoundingClientRect();
            var maxX = contentRect.width - shadowRect.width;
            var maxY = contentRect.height - shadowRect.height;
 
            var X = evt.pageX - pos.left - shadowRect.width / 2;
            var Y = evt.pageY - pos.top - shadowRect.height / 2;
 
            if (X <= 0) {
                X = 0;
            }
            if (X >= maxX) {
                X = maxX;
            }
            if (Y <= 0) {
                Y = 0;
            }
            if (Y >= maxY) {
                Y = maxY;
            }
            // 防止遮罩层粘滞，跟随鼠标一起滑出大图位置
            var bigX = X * bigRect.width / contentRect.width;
            var bigY = Y * bigRect.height / contentRect.height;
            //  bigX / bigW = X / contentW,主图和遮罩层之间存在两倍关系，放大图和原图之间也有两倍关系
            shadow.style.left = X + "px";
            shadow.style.top = Y + "px";
 
            // console.log(X, Y, bigX, bigY);
 
            big.style.left = -bigX + "px";
            big.style.top = -bigY + "px";
 
            larger.style.display = "block";
            shadow.style.display = "block";
        },
        handleOut(evt) {
            var larger = this.$refs.larger;
            var shadow = this.$refs.shadow;
            larger.style.display = "none";
            shadow.style.top = "-1000px";
        },
    getphone(){
      var _this = this;
      _this.$http
        .post("/api/user/phonesorts", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.lists = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get(){
      var _this = this;
      _this.$http
        .post("/api/user/detail", {})
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
    gouwuche(){
      this.$router.push('/money')
    },
    shouye() {
      this.$router.push('/')
    },
    // 产品图片鼠标移入事件,显示阴影,显示大图
   
  },
  
}
</script>
<style scoped>
    /* @import '../assets/detail.css'; */
    /* @import '../assets/common.css'; */
.choose {
    width: 400px;
    height: 600px;
    float: left;
    margin: 10px 0 0 10px;
}
 
.content {
    width: 400px;
    height: 400px;
    position: relative;
}
 
.content img {
    width: 400px;
    height: 400px;
}
#listshow {
    width: 400px;
    height: 100px;
    margin-top: 20px;
}
 
#listshow li {
    width: 98px;
    height: 100px;
    float: left;
    border: 1px solid #666;
}

#listshow li img {
    width: 98px;
    height: 100px;
}
 
#listshow .selected {
    border-color: brown;
}
 
.larger {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 170px;
    left: 260px;
    float: left;
    overflow: hidden;
    display: none;
}
 
.larger img {
    width: 800px;
    height: 800px;
    position: absolute;
    left: 0;
    top: 0;
}
 
.shadow {
    width: 200px;
    height: 200px;
    background-color: rgba(145, 200, 200, 0.4);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    display: none;
}
</style>
