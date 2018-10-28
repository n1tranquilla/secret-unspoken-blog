import React from 'react'
import Subscribe from '../components/Subscribe'
import Layout from '../components/Layout'
import Column from '../components/Column'
import Delay from '../components/Delay'

const SubscribePage = props => (
    <Layout>
        <Column>
            <Delay>
                <Subscribe/>
            </Delay>
        </Column>
    </Layout>
)

export default SubscribePage