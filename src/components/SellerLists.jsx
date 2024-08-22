import React from "react";
import {Avatar, Button, Card, Divider, Flex, Tooltip, Typography} from "antd";

const SellerLists = () => {
    return (
      <Flex align="center" justify="space-between" gap="large">
          <Flex gap="small" vertical="row" className="top-seller">
              <Flex align="center" justify="space-between">
                  <Typography.Title level={5} strong className="primary--color">
                      Top Seller
                  </Typography.Title>
                  <Button type="link" className="gray--color">
                      View All
                  </Button>
              </Flex>
              <Card >
                  <Flex align="center" justify="space-evenly">
                      <Avatar.Group
                      max={{
                          popover: "click" ,
                          count: 5,
                          style: {
                              color:"#f56a00",
                              backgroundColor: "#fde3cf",
                              cursor: "progress"
                          }
                      }}
                      size="large"
                      >
                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1502767882403-636aee14f873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>
                        <Tooltip title="User 1" placement="top">
                            <Avatar src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                        </Tooltip>

                        <Tooltip title="User 1" placement="top">
                            <Avatar src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                        </Tooltip>

                        <Tooltip title="User 1" placement="top">
                            <Avatar src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                        </Tooltip>

                        <Tooltip title="User 1" placement="top">
                            <Avatar src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                        </Tooltip>
                        <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>
                      </Avatar.Group>
                      <Divider type="vertical" className="divider"/>
                      <Flex vertical="row">
                          <Typography.Text type="secondary" strong>
                              25 plant sold
                          </Typography.Text>
                          <Typography.Text type="secondary" strong>
                              10 sellers
                          </Typography.Text>

                      </Flex>
                  </Flex>
              </Card>
          </Flex>

          <Flex gap="small" vertical="row" className="featured-seller">
              <Flex align="center" justify="space-between">
                  <Typography.Title level={5} strong className="primary--color">
                      Featured Seller
                  </Typography.Title>
                  <Button type="link" className="gray--color">
                      View All
                  </Button>
              </Flex>
              <Card >
                  <Flex align="center" justify="space-evenly">
                      <Avatar.Group
                          max={{
                              popover: "click" ,
                              count: 5,
                              style: {
                                  color:"#f56a00",
                                  backgroundColor: "#fde3cf",
                                  cursor: "progress"
                              }
                          }}
                          size="large"
                      >
                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1502767882403-636aee14f873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>
                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>

                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>

                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>

                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>
                          <Tooltip title="User 1" placement="top">
                              <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"/>
                          </Tooltip>
                      </Avatar.Group>
                      <Divider type="vertical" className="divider"/>
                      <Flex vertical="row">
                          <Typography.Text type="secondary" strong>
                              39 plant sold
                          </Typography.Text>
                          <Typography.Text type="secondary" strong>
                              8 sellers
                          </Typography.Text>

                      </Flex>
                  </Flex>
              </Card>
          </Flex>
      </Flex>
    );
};

export default SellerLists;