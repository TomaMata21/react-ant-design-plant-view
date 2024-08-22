import React from "react";
import {Card, Flex, Image, Typography} from "antd";
import plant from "../assets/plant01.png";

const ContentSidebar = () => {
    return <div>
        <Card className="card">
            <Flex vertical gap="large">
                <Typography.Title level={4} strong>
                    Today <br/> 5 orders
                </Typography.Title>
                <Typography.Title level={4} strong>
                    This Month <br/>
                    240 orders
                </Typography.Title>
            </Flex>
            <Image
                src={plant}
                style={{
                    position: 'absolute',
                    bottom: -50,
                    left: 80,
                    height: '300px' ,
                    width: 'auto'
                }}
                alt="plant"/>
        </Card>
    </div>
};

export default ContentSidebar;