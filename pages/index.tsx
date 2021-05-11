import Button from "../components/Button";
import Layout from "../components/Layout";
import OrderedList from "../components/OrderedList";
import Carousel from "../components/Carousel";
import TitleWithDescription from "../components/TitleWithDescription";
import Container from "../components/Container";
import ListWithIcons from "../components/ListWithIcons";
import Title from "../components/Title";

export default function Home() {
	return (
		<Layout>
			<Container
				className="bg-gray-50 lg:py-64 text-white"
				style={{
					background: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url("img1.jpg") center center no-repeat',
					backgroundPosition: '50%, initial'
				}}
			>
				<TitleWithDescription title="Making Better Life at Work" />
				<Button color="primary">Learn More</Button>
			</Container>
			<Container columns={2}>
				<div className="p-8">
					<TitleWithDescription
						alignment="left"
						title="Who are We"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					/>
				</div>
				<img src="img2.jpg" />
			</Container>
			<Container columns={2}>
				<img src="img3.jpg" />
				<div className="p-8">
					<TitleWithDescription
						alignment="left"
						title="Why Choose Us"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					/>
				</div>
			</Container>
			<Container>
				<Carousel title="Testimonials">
					<p>Pariatur consectetur laboris exercitation duis laboris.
					Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui
						tempor tempor.</p>
					<p>Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
					dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
						Adipisicing.</p>
					<p>Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum
					excepteur cillum consequat consectetur duis magna qui eu consequat occaecat.
						Deserunt nisi sit.</p>
				</Carousel>
			</Container>
			<Container className="bg-gray-50">
				<Title className="font-bold">What You Are Getting</Title>
				<Container columns={2}>
					<img src="img4.jpg" />
					<OrderedList
						title="What You Deserve"
						className="bg-gray-50"
						listItems={[
							{
								title: `Designers`,
								description: `Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum
						excepteur cillum consequat consectetur duis magna qui eu consequat occaecat.
						Deserunt nisi sit.`,
							},
							{
								title: `Developers`,
								description: `Pariatur consectetur laboris exercitation duis laboris.
						Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui
						tempor tempor.`,
							},
							{
								title: `Product owners`,
								description: `Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
						dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
						Adipisicing.`,
							}
						]}
					/>
				</Container>
			</Container>
			<Container columns={3}>
				<TitleWithDescription
					size="small"
					title="Feature 1"
					description="Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
					  dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
					  Adipisicing."
				/>
				<TitleWithDescription
					size="small"
					title="Feature 2"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
				<TitleWithDescription
					size="small"
					title="Feature 3"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				/>
			</Container>
			<Container className='bg-gray-50'>
				<TitleWithDescription
					title="Interested?"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				/>
			</Container>
			<Container columns={2}>
				<img src="img5.png" />
				<div className="p-8">
					<TitleWithDescription
						alignment="left"
						title="Learn More"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
					/>
					<Button color="primary" className="mt-8">Request A Quotation</Button>
				</div>
			</Container>
			<Container className="bg-gray-50">
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
							icon: 'icon1.svg',
							description: `Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum
					  excepteur cillum consequat consectetur duis magna qui eu consequat occaecat.
					  Deserunt nisi sit.`,
						},
						{
							title: `Developers`,
							icon: 'icon2.svg',
							description: `Pariatur consectetur laboris exercitation duis laboris.
					  Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui
					  tempor tempor.`,
						},
						{
							title: `Product owners`,
							icon: 'icon3.svg',
							description: `Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
					  dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
					  Adipisicing.`,
						}
					]}
				/>
			</Container>
		</Layout>
	)
}
