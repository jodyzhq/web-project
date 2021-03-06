/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-04-09 22:32:26 
 * @Description: 项目展示-列表展示
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-04-17 09:37:25
 */
 
import $ from 'jquery'
import hbs from './index.hbs' 
import './index.css'
 
export default class ProjectList {
 
  /**
   * Creates an instance of ProjectList.
   * @param {string} 元素选择器 
   */
  constructor(selector) {
    this.selector = selector
  }

  render(data) {
    $(this.selector).html(hbs(data))
  }
}
