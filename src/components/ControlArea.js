import React from 'react';

import { PageHeader,Button} from 'antd';
class ControlArea extends React.Component{
    render() {
        return(
            <div>
                <PageHeader
                    ghost={false}
                    className="site-page-header"
                    title="五子棋"
                    subTitle="react五子棋"
                    extra={[
                        <Button key="1" type="primary">
                            重新开始
                        </Button>,
                        <Button key="2">悔棋</Button>
                    ]}
                />
            </div>
        )
    }
}

export {ControlArea};