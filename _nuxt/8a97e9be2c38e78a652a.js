(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{603:function(t,e,r){"use strict";r.r(e);r(36);var n=r(5),o=r(462),c=r(469),d=r(480),h=r(481),m=r(483),l=r(464),$=r(465),f=r(482),k={components:{PatientsBreakdownCard:o.a,PatientsTransitionCard:c.a,PatientsDetailCard:d.a,PatientsByResidence:h.a,InspectionsTransitionCard:m.a,PatientsByAgeCard:l.a,SickbedsUsedRateCard:$.a,ConsultationsTransitionCard:f.a},fetch:function(t){var e=t.store,r=t.app;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.get(r.$env.apiUrl).then((function(t){e.commit("setData",t.data)}));case 2:case"end":return t.stop()}}),t)})))()},data:function(){var title;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況");break;case"number-of-confirmed-cases":title=this.$t("陽性患者数");break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性");break;case"patients-by-residence":title=this.$t("居住地別陽性患者数");break;case"patients-by-age":title=this.$t("年代別陽性患者数");break;case"patietns-and-sickedbeds":title=this.$t("入院患者数と病床数");break;case"number-of-tested-cases":title=this.$t("検査実施数");break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("相談窓口相談件数")}var data={title:title};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("大分県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},w=r(8),component=Object(w.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("patients-breakdown-card"):"number-of-confirmed-cases"==this.$route.params.card?e("patients-transition-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("patients-detail-card"):"patients-by-residence"==this.$route.params.card?e("patients-by-residence"):"number-of-tested-cases"==this.$route.params.card?e("inspections-transition-card"):"patients-by-age"==this.$route.params.card?e("patients-by-age-card"):"patietns-and-sickedbeds"==this.$route.params.card?e("sickbeds-used-rate-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultations-transition-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);