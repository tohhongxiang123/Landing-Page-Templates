import React from 'react'
import Container from '../../components/Containers/BaseContainer'
import WaveContainer from '../../components/Containers/WaveContainer'
import Layout from '../../components/Layouts/Layout'
import Carousel from '../../components/Lists/Carousel'
import Quote from '../../components/Quote'
import Title from '../../components/Title'
import TitleWithDescription from '../../components/TitleWithDescription'
import OrderedList from '../../components/Lists/OrderedList'
import Button from '../../components/Button'

export default function template1() {
    return (
        <Layout title="Template 1">
            <Container columns={2} className="max-h-1/2">
                <img src="/img2.jpg" height={256} />
                <TitleWithDescription title="Lorem Ipsum" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...">
                    <Button color="primary" className="m-12">Purchase Now</Button>
                </TitleWithDescription>
            </Container>
            <WaveContainer className="bg-blue-100">
                <Title>Satisfied Customers</Title>
                <Carousel>
                    <Quote 
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, diam vel vehicula rhoncus, dolor turpis rhoncus nulla, at mollis leo purus nec nisi. Etiam commodo nec enim eu dignissim." 
                        author="Praesent aliquam"
                    />
                    <Quote 
                        quote="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mattis mauris risus, sed posuere ex pellentesque vel. Aliquam sagittis nulla ipsum, nec aliquam metus sagittis sit amet." 
                        author="Sed pellentesque"
                    />
                    <Quote 
                        quote="Cras convallis justo enim, vel fringilla dolor suscipit sed. Phasellus sodales mattis erat quis porta. Etiam laoreet commodo pulvinar. Proin egestas diam in sapien hendrerit, in porta erat fringilla." 
                        author=" Etiam laoreet"
                    />
                    <Quote 
                        quote="Suspendisse potenti. Phasellus ornare facilisis leo vitae suscipit. Pellentesque ac consequat nisi. Mauris accumsan nisl ac vestibulum ultricies. Praesent nec velit sed est pellentesque viverra." 
                        author="Aliquam dictum"
                    />
                    <Quote 
                        quote="Morbi fermentum lacus non tortor bibendum ultrices eget quis leo. Suspendisse suscipit eleifend vestibulum. Nunc tempor neque at placerat luctus." 
                        author="Nam mollis"
                    />
                </Carousel>
            </WaveContainer>
            <Container>
                <Title>Features</Title>
                <OrderedList 
                    listItems={[
                        {
                            title: "Lorem ipsum dolor sit amet",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, diam vel vehicula rhoncus, dolor turpis rhoncus nulla, at mollis leo purus nec nisi. Etiam commodo nec enim eu dignissim."
                        },
                        {
                            title: "Class aptent taciti sociosqu ad litora",
                            description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                        },
                        {
                            title: "Aliquam dictum",
                            description: "Morbi fermentum lacus non tortor bibendum ultrices eget quis leo."
                        },
                    ]}
                />
            </Container>
            <Container className="bg-blue-50">
                <TitleWithDescription title="Why wait?" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...">
                    <Button color="primary" className="m-12">Purchase Now</Button>
                </TitleWithDescription>
            </Container>
        </Layout>
    )
}
