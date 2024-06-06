import styled from "styled-components";
import { Card } from 'antd'

export const StyledCard = styled(Card)`
    width: auto;
    height: 550px;
    margin-right: 10px;
    &.ant-card .ant-card-body {
        padding: 0 !important;
    }
`