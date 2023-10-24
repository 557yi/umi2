import yayJpg from '../assets/yay.jpg';
import { Button, Space } from 'antd';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import moment from 'moment'
import { Tabs } from 'antd';

const bgc = {
  height: "800px",
  width: "500px"

}
const div1 = {
  marginTop: '100px',
  height: "250px",
  width: "480px",
  backgroundColor: '#f5f4c8'
}
const div2 = {
  marginTop: '10px',
  height: "50px",
  width: "480px",
  backgroundColor: '#f5f4c8',
  paddingTop: '30px'
}
const div3 = {
  marginTop: '10px',
  height: "500px",
  width: "480px",
  backgroundColor: '#f5f4c8'
}
function Cord(props){
  return (
<div>
  我在 {props.time}时转账了{props.yuan1}
</div>
  );
}
export default function HomePage() {
  const [yuan, setyuan] = useState(0)
  const [record,setrecord] = useState([])
function reduce(){
  setyuan(yuan-1)
  let arr = record
  let time = moment().format('YYYY-MM-DD HH:mm:ss'); 
  arr.push({
    yuan:-1,
    time:time
  })
  setrecord(arr)
  console.log(arr)
}
function add(){
  setyuan(yuan+1)
  let arr = record
  let time = moment().format('YYYY-MM-DD HH:mm:ss'); 
  arr.push({
    yuan:1,
    time:time
  })
  setrecord(arr)
  console.log(arr)
}
const listItems = record.map(props =>
  <li>{props.time}转账了{props.yuan}yuan</li>
);
  return (
    <div style={bgc}>
      <br></br>
      <div style={div1}>
        <div>
          {/* <Space size={[8, 16]}>
  <span>攒钱</span>
  <span>设置</span>
  </Space> */}
          <Row>
            <Col span={8}>攒钱</Col>
            <Col span={2} offset={10}>
              设置
            </Col>
            <Col span={5} offset={8}>总金额</Col>
            <Col span={5} offset={9}><h2>{yuan}</h2></Col>
            <br></br>
            <Col span={12} offset={3}>
              <button onClick={reduce}>
                <h3>
                  转出
                </h3>
              </button>

            </Col>
            <Col span={3} >
            <button onClick={add}>
                <h3>
                  转入
                </h3>
              </button>
            </Col>
          </Row>
        </div>
      </div>
      <div style={div2}>
      <Row>
      <Col span={4} offset={1}>付款</Col>
      <Col span={4} >收款</Col>
      <Col span={4} >自动赞</Col>
      <Col span={4} >限额</Col>
      <Col span={4} >权益</Col>
      </Row>
      </div>
      <div style={div3}>
<ul>
  {listItems}
</ul>
      </div>
    </div>
  );
}
