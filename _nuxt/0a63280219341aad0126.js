(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{642:function(t,e,r){"use strict";r.r(e);r(36);var n=r(6),o=r(501),c=r(512),d=r(502),h=r(507),m=r(510),l=r(505),$=r(504),f=r(511),y=r(503),k=r(509),w=r(506),C=r(508),v={components:{PatientsBreakdownCard:o.a,PatientsTransitionCard:c.a,PatientsDetailCard:d.a,PatientsByResidence:h.a,InspectionsTransitionCard:m.a,PatientsByAgeCard:l.a,SickbedsUsedRateCard:$.a,ConsultationsTransitionCard:f.a,UsageStatsByIndustryCard:y.a,UsageStatsTransitionCard:k.a,SubsidyConsultationTransitionCard:w.a,SubsidyApplicationTransitionCard:C.a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.app,e.next=3,n.$axios.get(n.$env.apiUrl).then((function(t){r.commit("setData",t.data)}));case 3:return e.next=5,n.$axios.get(n.$env.supportUrl).then((function(t){r.commit("setSupport",t.data)}));case 5:case"end":return e.stop()}}),e)})))()},data:function(){var title;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況");break;case"number-of-confirmed-cases":title=this.$t("陽性患者数");break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性");break;case"patients-by-residence":title=this.$t("居住地別陽性患者数");break;case"patients-by-age":title=this.$t("年代別陽性患者数");break;case"patietns-and-sickedbeds":title=this.$t("入院患者数と病床数");break;case"number-of-tested-cases":title=this.$t("検査実施数");break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("相談窓口相談件数");break;case"usage-stats-transition":title=this.$t("新型コロナウイルス関連の大分県における融資の利用状況 (融資実績)");break;case"usage-stats-by-industry":title=this.$t("新型コロナウイルス関連の大分県における融資の利用状況 (業種別件数)");break;case"subsidy-consultation-transition":title=this.$t("雇用調整助成金の申請に関する相談件数");break;case"subsidy-application-transition":title=this.$t("雇用調整助成金 (申請書提出件数、支給決定件数)")}var data={title:title};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("大分県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},T=r(8),component=Object(T.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("patients-breakdown-card"):"number-of-confirmed-cases"==this.$route.params.card?e("patients-transition-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("patients-detail-card"):"patients-by-residence"==this.$route.params.card?e("patients-by-residence"):"number-of-tested-cases"==this.$route.params.card?e("inspections-transition-card"):"patients-by-age"==this.$route.params.card?e("patients-by-age-card"):"patietns-and-sickedbeds"==this.$route.params.card?e("sickbeds-used-rate-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultations-transition-card"):"usage-stats-by-industry"==this.$route.params.card?e("usage-stats-by-industry-card"):"usage-stats-transition"==this.$route.params.card?e("usage-stats-transition-card"):"subsidy-consultation-transition"==this.$route.parasm.card?e("subsidy-consultation-transition-card"):"subsidy-application-transition"==this.$route.params.card?e("subsidy-application-transition-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);