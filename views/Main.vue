<template>
  <div class="hello">
    <el-container>
      <el-header>
        <span class="title">订单页面模板打印设计</span>
        <el-button>保存</el-button>
      </el-header>
      <el-main>
        <div class="left">
          <div
            class="main"
            :style="{ width: page.width + 'mm', height: page.height + 'mm' }"
          >
            <newDrag
              :orderlistProps="orderlistProps"
              :goodslistProps="goodslistProps"
              :countlistProps="countlistProps"
              :signlistProps="signlistProps"
              :mainlistProps="mainlistProps"
              :key="timer"
            ></newDrag>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              打印设置
            </div>
            <div class="item-main page">
              <ul>
                <li>
                  <span class="page-item-title"
                    >每页显示行数
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="当输入显示的行数过大时，则默认换到下一页"
                      placement="top-start"
                    >
                      <i class="el-icon-question"></i> </el-tooltip
                    >:</span
                  >
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      v-model="printSetting.lineNumber"
                      style="width: 150px"
                      @change="pageSizeSet"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">上边距:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      v-model="printSetting.topMargin"
                      style="width: 150px"
                    ></el-input>
                  </div>
                  <span class="page-item-title">左边距:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      v-model="printSetting.leftMargin"
                      style="width: 150px"
                    ></el-input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 纸张设置 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              纸张设置
            </div>
            <div class="item-main page">
              <ul>
                <li>
                  <span class="page-item-title">多联纸:</span>
                  <div class="page-item-content">
                    <el-radio-group
                      v-model="page.quota"
                      size="mini"
                      @change="quotaSet"
                    >
                      <el-radio-button label="1">一等份</el-radio-button>
                      <el-radio-button label="2">二等份</el-radio-button>
                      <el-radio-button label="3">三等份</el-radio-button>
                    </el-radio-group>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">其他常用纸:</span>
                  <div class="page-item-content">
                    <el-radio-group
                      v-model="page.pageType"
                      size="mini"
                      @change="pageTypeChange"
                    >
                      <el-radio-button label="A4纸"></el-radio-button>
                      <el-radio-button label="A5纸"></el-radio-button>
                      <el-radio-button label="A6纸"></el-radio-button>
                    </el-radio-group>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">模板类型:</span>
                  <div class="page-item-content">
                    <el-select v-model="page.templateType" size="mini">
                      <el-option
                        v-for="item in templateType"
                        :key="item.value"
                        :label="item.id"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">顶部标题:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 300px"
                      v-model="page.headerTitle"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">头部空间:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 300px"
                      type="number"
                      v-model="page.topMargin"
                      min="20"
                      max="60"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">底部空间:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 300px"
                      type="number"
                      v-model="page.bottomMargin"
                      min="20"
                      max="60"
                    ></el-input>
                  </div>
                </li>

                <!-- <li>
                  <span class="page-item-title">模板设置:</span>
                  <div class="page-item-content template-set">
                    <el-radio v-model="page.userDefind" label="1"
                      >单排自定义</el-radio
                    >
                    <el-radio v-model="page.userDefind" label="2"
                      >双排固定</el-radio
                    >
                  </div>
                </li> -->
              </ul>
            </div>
          </div>
          <!-- 订单信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              订单信息
            </div>
            <div class="item-main header-info">
              <div>
                <el-checkbox-group v-model="orderType">
                  <el-checkbox
                    v-for="item in orderMenuList"
                    :key="item.id"
                    :disabled="item.disabled"
                    :label="item.id"
                    border
                    size="mini"
                    >{{ item.label }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
              <FontSet @getdata = "data => getdata(data,1)"></FontSet>
            </div>
          </div>
          <!-- 商品信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              商品信息
            </div>
            <div class="item-main main-info">
              <div>
                <el-checkbox-group v-model="goodsType">
                  <el-checkbox
                    v-for="item in goodsMenuList"
                    :key="item.id"
                    :disabled="item.disabled"
                    :label="item.id"
                    border
                    size="mini"
                    >{{ item.label }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
              <div class="main—info-defind">
                <el-tag
                  :key="tag"
                  v-for="tag in goodsUserDefind"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                >
                </el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput"
                  >+ 输入自定义空列</el-button
                >
              </div>
              <FontSet></FontSet>
              <!-- 辅助边框线设置 -->
              <div class="guide-line">
                <div class="item">
                  <span class="guide-line-title">外边框：</span>
                  <div class="item-content">
                    <select name="" id="">
                      <option value="0">虚线</option>
                      <option value="1">实线</option>
                    </select>
                    <div class="input-box">
                      <input type="number" min="0" max="3" />
                      <span>PX</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <span class="guide-line-title">内边框：</span>
                  <div class="item-content">
                    <select name="" id="">
                      <option value="0">虚线</option>
                      <option value="1">实线</option>
                    </select>
                    <div class="input-box">
                      <input type="number" min="0" max="3" />
                      <span>PX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 合计信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              合计信息
            </div>
            <div class="item-main footer-info">
              <div>
                <el-checkbox-group v-model="countType">
                  <el-checkbox
                    v-for="item in countList"
                    :key="item.id"
                    :disabled="item.disabled"
                    :label="item.id"
                    border
                    size="mini"
                    >{{ item.label }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
              <FontSet></FontSet>
            </div>
          </div>
          <!-- 签字信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              签字信息
            </div>
            <div class="item-main footer-info">
              <div>
                <el-checkbox-group v-model="signType">
                  <el-checkbox
                    v-for="item in signList"
                    :key="item.id"
                    :disabled="item.disabled"
                    :label="item.id"
                    border
                    size="mini"
                    >{{ item.label }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
              <div class="footer—info-defind">
                <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >
                  {{ tag }}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                >
                </el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput"
                  >+ 输入自定义空列</el-button
                >
              </div>
              <FontSet></FontSet>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 局部字体设置组件
import FontSet from "./../components/FontSet";
// 拖拽组件
import newDrag from "./../components/newDrag";
// 导入默认的选项
import defaultdata from "./../assets/data";

export default {
  name: "HelloWorld",
  components: {
    FontSet,
    newDrag,
  },
  data() {
    return {
      timer:'',
      // 打印设置
      printSetting: {
        lineNumber: 0,
        topMargin: 150,
        leftMargin: 140,
      },
      // 纸张设置
      page: {
        width: 210,
        height: 297,
        pageType: "A4纸",
        quota: "", //等份
        templateType: "3", //模板类型
        headerTitle: "配送单",
        topMargin: 60,
        bottomMargin: 30,
        userDefind: "1", //1.单排自定义，2.双排固定
      },
      // 模板选项
      templateType: defaultdata.templateTypeList,

      // 注意事项
      notice: defaultdata.notice,
      // 订单信息
      orderMenuList: defaultdata.orderMenuList,
      orderType: [1, 2, 3, 4, 5],
      // 商品信息
      goodsMenuList: defaultdata.goodsMenuList,
      goodsType: [1, 2, 3, 4, 5],
      // 合计信息
      countList: defaultdata.countList,
      countType: [1, 2, 3, 4, 5],
      // 签字信息
      signList: defaultdata.signList,
      signType: [1, 2, 3, 4, 5],
      input: 12,
      // 全局信息
      mainlistProps:defaultdata.mainList,
      // 商品信息自定义空列
      goodsUserDefind: [],
      // 自定义信息
      dynamicTags: ["菜东家", "客户信息", "其他的必须信息"],
      inputVisible: false,
      inputValue: "",
      // 辅助线
      input2: "nihao",
    };
  },
  computed: {
    // 订单信息
    orderlistProps() {
      return this.sort(this.orderMenuList, this.orderType);
    },
    // 商品信息
    goodslistProps() {
      return this.sort(this.goodsMenuList, this.goodsType);
    },
    // 合计信息
    countlistProps() {
      return this.sort(this.countList, this.countType);
    },
    // 签字信息
    signlistProps() {
      return this.sort(this.signList, this.signType);
    },
  },
  methods: {
    // 筛选选中的项
    sort(list, selectList) {
      let arr = [];
      list.map((e) => {
        selectList.map((p) => {
          if (e.id == p) {
            arr.push(e);
          }
        });
      });
      return arr;
    },
    // 纸张型号设置
    pageTypeChange(e) {
      this.timer = new Date().getTime()
      this.page.quota = "";
      if (e === "A4纸") {
        this.page.width = 210;
        this.page.height = 297;
      } else if (e === "A5纸") {
        this.page.width = 148;
        this.page.height = 210;
      } else if (e === "A6纸") {
        this.page.width = 105;
        this.page.height = 148;
      }
    },
    // 纸张大小自定义设置
    pageSizeSet() {
      this.page.pageType = "自定义";
    },
    // 纸张等份设置
    quotaSet(e) {
      this.timer = new Date().getTime()
      this.page.pageType = "";
      this.page.quota = e;
      switch (e) {
        case "1":
          this.page.width = 241;
          this.page.height = 280;
          break;
        case "2":
          this.page.width = 241;
          this.page.height = 140;
          break;
        case "3":
          this.page.width = 241;
          this.page.height = 93;
          break;
      }
    },
    getdata(data,type) {
      console.log(type)
      console.log(data)
    },
    /* element 标签的原生事件 勿删 */
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color1: #009688; //主体颜色

li {
  list-style: none;
}

// 头部
.el-header {
  height: 60px;
  background-color: #409eff;
  display: flex;
  align-items: center;

  .title {
    display: block;
    flex: 1;
    font-size: 24px;
    color: #fff;
  }
}

// 主体布局
.el-main {
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  margin: 0;
  padding: 0;

  .left {
    flex: 1;
    height: calc(100vh - 60px);
    overflow: auto;
    display: flex;
    justify-content: center;

    .main {
      margin-top: 100px;
      margin-bottom: 100px;
      position: relative;
      background-color: #fff;
    }
  }

  .right {
    height: calc(100vh - 60px);
    overflow: auto;
    width: 500px;
    background-color: #fff;
    padding-bottom: 50px;
    border-bottom: 1px solid $main-color1;
    box-sizing: border-box;
  }
}

// 右边主体布局
.item-title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid $main-color1;
  padding: 10px 15px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
}

// 注意事项
.notice {
  li {
    list-style: decimal;
    margin-left: 20px;
    margin-top: 8px;
    color: red;
    font-size: 14px;
  }
}

// 纸张设置
.page {
  padding: 0 20px;

  ul {
    margin-bottom: 15px;

    li {
      display: flex;
      align-items: center;
      margin-top: 15px;

      .page-item-title {
        font-size: 14px;
        color: #333;
        margin-right: 10px;
      }

      .page-item-content {
        flex: 1;
      }

      .template-set {
        padding-left: 30px;
      }
    }
  }
}

// 头部信息
.header-info,
.main-info,
.footer-info {
  padding: 0 20px;

  div {
    &:first-child {
      .el-checkbox {
        margin-right: 5px;
        margin-left: 5px;
        margin-top: 8px;
      }
    }
  }
}
.footer—info-defind,
.main—info-defind {
  padding: 5px 0;
  margin-left: 5px;
  .el-tag {
    display: block;
    width: 300px;
    margin-bottom: 5px;
  }
}

// 主体部分信息
.guide-line {
  margin-top: 10px;

  .item {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;

    .guide-line-title {
      font-size: 16px;
    }

    .item-content {
      display: flex;
      flex-direction: row;
      align-content: center;

      .input-box {
        display: flex;
        align-content: center;

        span {
          display: inline-block;
          padding: 2px 0px 2px 3px;
          border-radius: 0 5px 5px 0;
          height: 30px;
          line-height: 26px;
          box-sizing: border-box;
          width: 40px;
          border: 1px solid #cccccc;
          font-size: 14px;
          background-color: #ccc;
        }

        input[type="number"] {
          margin-left: 15px;
          padding: 2px 0px 2px 13px;
          border-radius: 5px 0 0 5px;
          height: 30px;
          box-sizing: border-box;
          width: 70px;
          border: 1px solid #cccccc;

          &:focus {
            outline: none;
          }
        }
      }
    }

    select {
      padding: 2px 3px;
      border-radius: 5px;
      height: 30px;
      box-sizing: border-box;
      border-style: none;
      border: 1px solid #cccccc;

      &:hover {
        border: 1px solid $main-color1;
      }

      &:focus {
        outline: none;
      }
    }
  }
}

// 自定义字段信息
.user-defind {
  padding: 10px 20px;
  margin-bottom: 50px;

  .el-tag {
    display: block;
    width: 300px;
    margin-bottom: 15px;
  }
}
</style>
