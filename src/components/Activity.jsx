import React from "react";
import {Avatar, Button, Flex, List, Typography} from "antd";

const  data = [
    {
        name: "Rock Tchiza",
        orderTime: 1,
    },
    {
        name: "Nina Akoua",
        orderTime: 2,
    },
    {
        name: "Ercia Bloom",
        orderTime: 3,
    },
    {
        name: "Shwan Malimo",
        orderTime: 4,
    },
    {
        name: "Villa Medos",
        orderTime: 5
    },
];
const Activity = () => {
    return (
        <Flex vertical gap="small">
        <Flex align="center" justify="space-between"  gap="large">
            <Typography.Title level={3} strong className="primary--color">
                Recent Activity
            </Typography.Title>
            <Button type="link" className="gray--color">
                View All
            </Button>
        </Flex>
        <List
            pagination
            dataSource={data}
            renderItem={(user, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${index}`}/>}
                        title={<a href="#">{user.name}</a>}
                        description="Ordered a new plant"
                    >
                    </List.Item.Meta>
                    <span className="gray--color">
                        {user.orderTime} {user.orderTime === 1 ? "day ago" : "days ago"}
                    </span>
                </List.Item>
            )}
        />
        </Flex>
    );
};

export default Activity;