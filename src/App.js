// 导入路由
import React from 'react'
import {Outlet} from 'react-router-dom'
import {Layout} from 'antd';
import Header from "@/components/Header";


// 配置路由规则
export default function App() {
  return (
      <Layout id='app'>
          <Header />
        <div className='container'>
          <div className='container_box'>
            <div className="container_content">
              <Outlet />
            </div>
          </div>
        </div>
      </Layout>
  )
}