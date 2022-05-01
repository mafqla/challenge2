import './index.scss';
import {Button, Table, Tabs} from "antd";
import {CaretDownOutlined, CaretRightOutlined, CloseCircleFilled, EditFilled} from "@ant-design/icons";

const {TabPane} = Tabs;

const Eda = () => {

    const data = [
        {
            key: '1',
            age: 32,
        },

    ];
    const dataObj =
        {
            width: 100,
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar) => (
                <div>
                    <div className="title">why</div>
                    <div className="main">
                        <div className="content">
                            <div className="question">
                                <div className="subheader">question</div>
                                <div className="text">
                                    why do you do ?
                                </div>
                            </div>
                            <div className="answer">
                                <div className="subheader">answer</div>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button><EditFilled/></Button>
                            <Button><CloseCircleFilled/></Button>
                            <Button onClick={() => rightAdd()}><CaretRightOutlined/></Button>
                            <Button onClick={() => bottomAdd()}><CaretDownOutlined/></Button>
                        </div>
                    </div>
                </div>
            ),
        }


    const columns = [{
        width: 100,
        dataIndex: 'avatar',
        key: 'avatar',
        render: (avatar) => (
            <div>
                <div className="title">why</div>
                <div className="main">
                    <div className="content">
                        <div className="question">
                            <div className="subheader">question</div>
                            <div className="text">
                                why do you do ?
                            </div>
                        </div>
                        <div className="answer">
                            <div className="subheader">answer</div>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button><EditFilled/></Button>
                        <Button><CloseCircleFilled/></Button>
                        <Button onClick={() => rightAdd()}><CaretRightOutlined/></Button>
                        <Button onClick={() => bottomAdd()}><CaretDownOutlined/></Button>
                    </div>
                </div>
            </div>
        )
    },
    ]
    // 向右添加
    const rightAdd = () => {
         columns.push(dataObj)
        console.log(columns)
    }


    // 向下添加
    const bottomAdd = () => {
    }


    return (
        <Tabs className="tabs">
            <TabPane tab="SET" key="1">
                <Table
                    dataSource={data}
                    pagination={false}
                    bordered
                    showHeader={false}
                    columns={columns}
                >

                </Table>


            </TabPane>


            <TabPane tab="ET" key="2">
            </TabPane>
            <TabPane tab="ST" key="3">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>


    )
}

export default Eda