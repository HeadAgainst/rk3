"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      boxColor: "rgb(255,85,127)",
      boxColorLs: [
        "rgb(255,85,127)",
        "rgb(255,170,0)",
        "rgb(170,0,0)",
        "rgb(0,170,127)"
      ],
      info: ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"],
      current: 0
    };
  },
  methods: {
    swiperChange(e) {
      this.current = e.detail.current;
      this.boxColor = this.boxColorLs[this.current];
    }
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.boxColor,
    b: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.swiperChange && $options.swiperChange(...args)),
    d: common_vendor.p({
      info: $data.info,
      current: $data.current,
      mode: "dot"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Downloads/HBuildX/workplace/demo3/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
