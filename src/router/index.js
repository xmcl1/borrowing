import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

//业务总览
import theOverviewOfBusiness from '@/components/myContent/theOverviewOfBusiness'

//个人中心--我的借款
import myBorrow from '@/components/myContent/personalCenter/myBorrow'
//个人中心--设置
import settings from '@/components/myContent/personalCenter/settings'

//放款--放款总览
import lendingOverview from '@/components/myContent/loan/lendingOverview'
//放款--放款详情
import lendingDetails from '@/components/myContent/loan/lendingDetails'
//放款--贷款人员统计
import loanOfficerStatistics from '@/components/myContent/loan/loanOfficerStatistics'
//放款--放款总额度统计
import totalLoanAmountStatistics from '@/components/myContent/loan/totalLoanAmountStatistics'
//放款--放款期限统计
import loanTermStatistics from '@/components/myContent/loan/loanTermStatistics'
//放款--贷款人住址统计
import lenderAddressStatistics from '@/components/myContent/loan/lenderAddressStatistics'

//还款
import repayment from '@/components/myContent/repayment'
//黑名单
import blacklist from '@/components/myContent/blacklist'
//404
import noPage from '@/components/myContent/noPage'

//登录页面
import login from '@/components/login'
//休息
import lock from '@/components/lock'
//系统配置
import configuration from '@/components/configuration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        httpAuthorize: true
      },
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        httpAuthorize: true
      },
      redirect: '/home/theOverviewOfBusiness',
      children: [
        {//业务总览
          path: 'theOverviewOfBusiness',
          name: 'theOverviewOfBusiness',
          component: theOverviewOfBusiness,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["业务总览"]
          },
        },
        {//个人中心--我的借款
          path: 'myBorrow',
          name: 'myBorrow',
          component: myBorrow,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["个人中心", "我的借款"]
          },
        },
        {//个人中心--设置
          path: 'settings',
          name: 'settings',
          component: settings,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["个人中心", "设置"]
          },
        },
        {//放款--放款总览
          path: 'lendingOverview',
          name: 'lendingOverview',
          component: lendingOverview,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["放款", "放款总览"]
          },
        },
        {//放款--放款详情
          path: 'lendingDetails',
          name: 'lendingDetails',
          component: lendingDetails,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["放款", "放款详情"]
          },
        },
        {//放款--贷款人员统计
          path: 'loanOfficerStatistics',
          name: 'loanOfficerStatistics',
          component: loanOfficerStatistics,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["放款", "贷款人员统计"]
          },
        },
        {//放款--放款总额度统计
          path: 'totalLoanAmountStatistics',
          name: 'totalLoanAmountStatistics',
          component: totalLoanAmountStatistics,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["放款", "放款总额度统计"]
          },
        },
        {//放款--放款期限统计
          path: 'loanTermStatistics',
          name: 'loanTermStatistics',
          component: loanTermStatistics,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["放款", "放款期限统计"]
          },
        },
        {//放款--贷款人住址统计
          path: 'lenderAddressStatistics',
          name: 'lenderAddressStatistics',
          component: lenderAddressStatistics,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["放款", "贷款人住址统计"]
          },
        },
        {//还款
          path: 'repayment',
          name: 'repayment',
          component: repayment,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["还款"]
          },
        },
        {//黑名单
          path: 'blacklist',
          name: 'blacklist',
          component: blacklist,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["黑名单"]
          },
        },
        {//系统配置
          path: 'configuration',
          name: 'configuration',
          component: configuration,
          meta: {
            httpAuthorize: true,
            breadcrumb: ["系统配置"]
          },
        }
      ]
    },
    {//登录
      path: '/login',
      name: 'login',
      component: login,
    },
    {//锁屏
      path: '/lock',
      name: 'lock',
      component: lock,
      meta: {
        httpAuthorize: true
      }
    },
    // {//404页面
    //   path: '*',
    //   name: 'noPage',
    //   component: noPage,
    // },
    {//404页面（默认跳转首页）
      path: '*',
      redirect: '/'
    }
  ]
})
