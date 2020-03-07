import React from 'react';

import { PageHeader,Button} from 'antd';
class ControlArea extends React.Component{
    handleReset(){
        this.props.onReset()
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
            </div>
        )
    }
}

export {ControlArea};