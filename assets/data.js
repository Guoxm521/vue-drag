/* 
    注意事项
*/
const notice = [
  {
    id: 1,
    text: "必须确定纸张尺寸后才能排版设计。",
  },
  {
    id: 2,
    text: "修改纸张设置会清除之前的所有操作，请谨慎操作。",
  },
  {
    id: 3,
    text: "头部与底部空间请谨慎填写。",
  },
  {
    id: 4,
    text: "纸张宽度、高度的单位是毫米（mm）。",
  },
];

/* 模板类型 */
const templateTypeList = [
  {
    value: "1",
    label: "订单模板",
  },
  {
    value: "2",
    label: "分拣模板",
  },
  {
    value: "3",
    label: "采购单模板",
  },
  {
    value: "4",
    label: "付款单模板",
  },
  {
    value: "5",
    label: "入库单模板",
  },
];
/* 订单信息设置 */
const orderMenuList = [
  {
    id: 1,
    label: "联系人",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 2,
    label: "联系电话",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 3,
    label: "单位名称",
    disabled: true,
    top: 0,
    left: 0,
  },
  {
    id: 4,
    label: "收货地址",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 5,
    label: "配送路线",
    disabled: true,
    top: 0,
    left: 0,
  },
];

/* 商品信息 */
const goodsMenuList = [
  {
    id: 1,
    label: "商品信息",
    disabled: false,
    top: 0,
    left: 150,
  },
  {
    id: 2,
    label: "商品规格",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 3,
    label: "单位",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 4,
    label: "下单数量",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 5,
    label: "配送数量",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 6,
    label: "备注",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 7,
    label: "单价",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 8,
    label: "金额",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 9,
    label: "条码",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 10,
    label: "生产日期",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 11,
    label: "保质期",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 12,
    label: "产地",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 13,
    label: "验收数量",
    disabled: false,
    top: 0,
    left: 0,
  },
];

/* 合计信息 */
const countList = [
  {
    id: 1,
    label: "下单金额",
    disabled: false,
  },
  {
    id: 2,
    label: "下单金额大写",
    disabled: false,
  },
  {
    id: 3,
    label: "配送金额",
    disabled: false,
  },
  {
    id: 4,
    label: "配送金额大写",
    disabled: false,
    top: 0,
    left: 0,
  },
];

/* 签字信息 */
const signList = [
  {
    id: 1,
    label: "库房",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 2,
    label: "配送员",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 3,
    label: "商户签收",
    disabled: false,
    top: 0,
    left: 0,
  },
  {
    id: 4,
    label: "财务",
    disabled: false,
    top: 0,
    left: 0,
  },
];
// 全局部分
const mainList = {
  title: {
    id: 1,
    typename: "title",
    top: 0,
    left: 0,
    bottom: 0,
  },
  orderlist: {
    id: 2,
    typename: "orderlist",
    top: 0,
    left: 0,
    bottom: 0,
  },
  goodslist: {
    id: 3,
    typename: "goodslist",
    top: 150,
    left: 0,
    bottom: 0,
  },
  countlist: {
    id: 4,
    typename: "countlist",
    top: 0,
    left: 0,
    bottom: 0,
  },
  signlist: {
    id: 5,
    typename: "signlist",
    top: 0,
    left: 0,
    bottom: 0,
  },
};

export default {
  notice,
  templateTypeList,
  orderMenuList,
  goodsMenuList,
  countList,
  signList,
  mainList,
};
