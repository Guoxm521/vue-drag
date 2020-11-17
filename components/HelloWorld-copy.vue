<template>
  <div class="hello">
    <el-container>
      <el-header>
        <span class="title">订单页面模板打印设计</span>
        <el-button>保存</el-button>
      </el-header>
      <el-main>
        <div class="left">
          <div class="main">主体拖拽部分，待完成</div>
        </div>
        <div class="right">
          <!-- 注意事项 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              注意事项
            </div>
            <div class="item-main notice">
              <li v-for="item in notice" :key="item.id">{{ item.text }}</li>
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
                  <span class="page-item-title">三级联单尺寸:</span>
                  <div class="page-item-content">
                    <el-radio-group v-model="radio3" size="mini">
                      <el-radio-button label="一等份"></el-radio-button>
                      <el-radio-button label="二等份"></el-radio-button>
                      <el-radio-button label="三等份"></el-radio-button>
                    </el-radio-group>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">其他纸张尺寸:</span>
                  <div class="page-item-content">
                    <el-radio-group v-model="radio3" size="mini">
                      <el-radio-button label="A4纸"></el-radio-button>
                      <el-radio-button label="A5纸"></el-radio-button>
                    </el-radio-group>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">模板类型:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 200px"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">模板名称:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 300px"
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
                    ></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">纸张宽度:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 150px"
                    ></el-input>
                  </div>
                  <span class="page-item-title">纸张高度:</span>
                  <div class="page-item-content">
                    <el-input
                      placeholder="请输入内容"
                      size="mini"
                      style="width: 150px"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">设置一页显示多少行商品:</span>
                  <div class="page-item-content">
                    <el-input placeholder="请输入内容" size="mini"></el-input>
                  </div>
                </li>
                <li>
                  <span class="page-item-title">单排自定义:</span>
                  <div class="page-item-content">
                    <el-radio></el-radio>
                  </div>
                  <span class="page-item-title">双排固定:</span>
                  <div class="page-item-content">
                    <el-radio></el-radio>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 头部信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              头部信息
            </div>
            <div class="item-main header-info">
              <div>
                <el-checkbox
                  v-for="item in headerMenuList"
                  :key="item.id"
                  v-model="item.checked"
                  :label="item.label"
                  border
                  size="mini"
                ></el-checkbox>
              </div>
              <FontSet></FontSet>
            </div>
          </div>
          <!-- 主体信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              主体信息
            </div>
            <div class="item-main main-info">
              <div>
                <el-checkbox
                  v-for="item in mainMenuList"
                  :key="item.id"
                  v-model="item.checked"
                  :label="item.label"
                  border
                  size="mini"
                ></el-checkbox>
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
          <!-- 底部信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              底部信息
            </div>
            <div class="item-main footer-info">
              <div>
                <el-checkbox
                  v-for="item in footerMenuList"
                  :key="item.id"
                  v-model="item.checked"
                  :label="item.label"
                  border
                  size="mini"
                ></el-checkbox>
              </div>
              <FontSet></FontSet>
            </div>
          </div>
          <!-- 辅助信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              辅助信息
            </div>
            <div class="item-main footer-info">
              <div>
                <el-checkbox
                  v-for="item in footerMenuList"
                  :key="item.id"
                  v-model="item.checked"
                  :label="item.label"
                  border
                  size="mini"
                ></el-checkbox>
              </div>
              <FontSet></FontSet>
            </div>
          </div>
          <!-- 自定义信息 -->
          <div class="item">
            <div class="item-title">
              <i class="el-icon-setting"></i>
              自定义信息添加
            </div>
            <div class="item-main user-defind">
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
                >+ 输入自定义字段</el-button
              >
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 局部字体设置组件
import FontSet from "./FontSet";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    FontSet,
  },
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      radio1: "上海",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海",
      checkList: ["选中且禁用", "复选框 A"],
      checked2: 1,
      // 注意事项
      notice: [
        { id: 1, text: "必须确定纸张尺寸后才能排版设计。" },
        { id: 2, text: "修改纸张设置会清除之前的所有操作，请谨慎操作。" },
        { id: 3, text: "头部与底部空间请谨慎填写。" },
        { id: 4, text: "纸张宽度、高度的单位是毫米（mm）。" },
      ],
      // 头部信息设置
      headerMenuList: [
        { id: 1, label: "联系人", checked: false },
        { id: 2, label: "联系电话", checked: false },
        { id: 3, label: "单位名称", checked: false },
        { id: 4, label: "收货地址", checked: false },
        { id: 5, label: "配送路线", checked: false },
      ],
      // 主体信息
      mainMenuList: [
        { id: 1, label: "商品信息", checked: false },
        { id: 2, label: "商品规格", checked: false },
        { id: 3, label: "单位", checked: false },
        { id: 4, label: "下单数量", checked: false },
        { id: 5, label: "配送数量", checked: false },
        { id: 6, label: "备注", checked: false },
        { id: 7, label: "单价", checked: false },
        { id: 8, label: "金额", checked: false },
        { id: 9, label: "条码", checked: false },
        { id: 10, label: "生产日期", checked: false },
        { id: 11, label: "保质期", checked: false },
        { id: 12, label: "产地", checked: false },
        { id: 13, label: "验收数量", checked: false },
      ],
      // 底部信息设置
      footerMenuList: [
        { id: 1, label: "配送员", checked: false },
        { id: 2, label: "库房", checked: false },
        { id: 3, label: "客户签收", checked: false },
        { id: 4, label: "收货人", checked: false },
        { id: 5, label: "验收人", checked: false },
        { id: 6, label: "监督人", checked: false },
        { id: 7, label: "财务", checked: false },
        { id: 8, label: "经手人", checked: false },
        { id: 9, label: "单位主管", checked: false },
        { id: 10, label: "验收单位", checked: false },
        { id: 11, label: "生活服务中心", checked: false },
        { id: 12, label: "送货责任人", checked: false },
      ],
      input: 12,
      // 自定义信息
      dynamicTags: ["菜东家", "客户信息", "其他的必须信息"],
      inputVisible: false,
      inputValue: "",
      // 辅助线
      input2: "nihao",
    };
  },
  methods: {
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
      width: 600px;
      height: 300px;
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
