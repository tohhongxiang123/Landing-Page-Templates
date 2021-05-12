import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Container from '../../components/Containers/BaseContainer'
import SlantedContainer from '../../components/Containers/SlantedContainer'
import TitleWithDescription from '../../components/TitleWithDescription'
import Button from '../../components/Button'
import ListWithIcons from '../../components/Lists/ListWithIcons'
import HorizontalList from '../../components/Lists/HorizontalList'
import Quote from '../../components/Quote'
import Title from '../../components/Title'

export default function template2() {
    return (
        <Layout title="Template 3">
            <SlantedContainer className='bg-pink-50' topGradient="zero" bottomGradient="negative">
                <Title>Business With Us</Title>
                <Quote
                    author="John Smith"
                    quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </SlantedContainer>
            <Container>
                <Title>Brands We Work With</Title>
                <HorizontalList>
                    <img width={128} height={128} src="/intel.svg" />
                    <img width={128} height={128} src="/amd.svg" />
                    <img width={128} height={128} src="/nvidia.svg" />
                </HorizontalList>
            </Container>
            <Container columns={2}>
                <img src="/img5.png" />
                <div className="p-8">
                    <TitleWithDescription
                        alignment="left"
                        title="Learn More"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                    <Button color="success" className="mt-8">Request A Quotation</Button>
                </div>
            </Container>
            <Container className="bg-pink-50">
                <TitleWithDescription
                    title="Officia et fugiat mollit qui"
                    description="Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
					dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
					Adipisicing."
                    className="mb-8"
                />
                <ListWithIcons
                    listItems={[
                        {
                            title: `Designers`,
                            icon: '/icon1.svg',
                            description: `Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum
					  excepteur cillum consequat consectetur duis magna qui eu consequat occaecat.
					  Deserunt nisi sit.`,
                        },
                        {
                            title: `Developers`,
                            icon: '/icon2.svg',
                            description: `Pariatur consectetur laboris exercitation duis laboris.
					  Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui
					  tempor tempor.`,
                        },
                        {
                            title: `Product owners`,
                            icon: '/icon3.svg',
                            description: `Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
					  dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
					  Adipisicing.`,
                        }
                    ]}
                />
            </Container>
            <Container>
                <TitleWithDescription
                    title="Get In Contact"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                >
                    <Button color="primary" className="m-8">Get in Contact</Button>
                </TitleWithDescription>
            </Container>
        </Layout>
    )
}
