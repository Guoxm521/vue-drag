<template>
  <div class="container">
    <div id="main">
      <div class="header" style="font-size: 40px" :style="{ textAlign: a }">
        标题
      </div>
      <div class="order" style="height: 60px">
        <p class="drag_yd" style="left: 5px; top: 25px">库房：</p>
        <p class="drag_yd" style="left: 150px">配送员：</p>
        <p class="drag_yd" style="left: 300px">客户签名：</p>
        <p class="drag_yd" style="left: 600px">财务：</p>
      </div>
      <div class="goods">
        <table style="width: 100%; border-spacing: 0" border="1">
          <thead style="text-align: center; height: 30px; line-height: 30px">
            <th style="left: 105px">序号</th>
            <th>单位</th>
            <th>商品规格</th>
            <th>下单数量</th>
            <th>配送数量</th>
            <th>序号</th>
            <th>序号</th>
          </thead>
          <tbody>
            <tr style="text-align: left; height: 30px; line-height: 30px">
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
            </tr>
            <tr style="text-align: center; height: 30px; line-height: 30px">
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
              <td>序号</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="count">
        <table style="width: 100%; border-spacing: 0; border-top: 0" border="1">
          <tbody>
            <tr style="text-align: left; height: 30px; line-height: 30px">
              <td>序号</td>
              <td>序号</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sign">
        <p
          style="
            position: absolute;
            overflow: hidden;
            z-index: 1;
            letter-spacing: 1px;
            left: 5px;
          "
        >
          库房：
        </p>
        <p
          style="
            left: 150px;
            position: absolute;
            overflow: hidden;
            z-index: 1;
            letter-spacing: 1px;
          "
        >
          配送员：
        </p>
        <p
          style="
            left: 300px;
            position: absolute;
            overflow: hidden;
            z-index: 1;
            letter-spacing: 1px;
          "
        >
          客户签名：
        </p>
        <p
          style="
            left: 600px;
            position: absolute;
            overflow: hidden;
            z-index: 1;
            letter-spacing: 1px;
          "
        >
          财务：
        </p>
      </div>
    </div>
    <button @click="print">打印</button>
  </div>
</template>

<script>
import { getLodop } from "./../assets/LodopFuncs";
export default {
  data() {
    return {
      a: "center",
    };
  },
  created() {
  },
  methods: {
    // 打印
    print() {
      let LODOP = getLodop();
      LODOP.PRINT_INIT("订货单");
      LODOP.SET_PRINT_STYLE("FontSize", 18);
      LODOP.SET_PRINT_STYLE("Bold", 1);
      LODOP.ADD_PRINT_TEXT(10, 231, 260, 39, "打印页面部分内容");
      LODOP.ADD_PRINT_HTM(
        0,
        0,
        600,
        600,
        document.getElementById("printname").innerHTML
      );
      //        LODOP.PRINT();
      LODOP.PREVIEW();
    },
  },
};
</script>

<style lang='scss' scoped>
// table,
// table thead th,
// table tr td {
//   border: 1px solid #000;
//   padding: 5px;
// }
// .goods,
// .count {
//   table {
//     width: 100%;
//     border: 1px solid #000;
//     border-bottom: 0;
//     border-collapse: collapse;
//   }
//   thead {
//     height: 30px;
//     line-height: 30px;
//     background: #f7f7f7;
//     color: #333;
//     border: 1px solid #000;
//     box-sizing: border-box;
//     th {
//       padding-left: 5px;
//       padding-right: 5px;
//       font-size: 15px;
//       letter-spacing: 1px;
//     }
//   }
// }
.drag_yd {
  position: absolute;
  overflow: hidden;
  z-index: 1;
  letter-spacing: 1px;
}
button {
  margin: 100px;
}
</style>
