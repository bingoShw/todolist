import React from 'react';
import { PageHeader,Button,Modal} from 'antd';

class ControlArea extends React.Component{
    state = {
        visible: false
    };
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    handleOk = e => {
        this.setState({
            visible: false,
        });
        this.props.onReset()
    };
    handleReset(){
        this.setState({
            visible: true,
        });
    }
    handleRegret(){
        this.props.onRegret()
    }
    render() {
        return(
            <div>
                <PageHeader
                    ghost={false}
                    className="site-page-header"
                    title="五子棋"
                    subTitle="react五子棋"
                    extra={[
                        <Button key="1" type="primary" onClick={this.handleReset.bind(this)}>
                            重新开始
                        </Button>,
                        <Button key="2" onClick={this.handleRegret.bind(this)}>悔棋</Button>
                    ]}
                />
                <Modal
                    title="重新开始"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    okText='确定'
                    onCancel={this.handleCancel}
                    cancelText='取消'
                >
                    <p>是否重新开始</p>
                </Modal>
            </div>
        )
    }
}

export {ControlArea};