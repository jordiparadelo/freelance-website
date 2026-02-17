import type { Project } from "@/utils/types";

const PROJECTS: Project[] = [
	{
		id: "1",
		title: "Realmix",
		cover: "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
		link: "http://archive.org/mauris.jsp?ut=ante&ultrices=ipsum&vel=primis&augue=in&vestibulum=faucibus&ante=orci&ipsum=luctus&primis=et&in=ultrices&faucibus=posuere&orci=cubilia&luctus=curae&et=mauris&ultrices=viverra&posuere=diam&cubilia=vitae&curae=quam&donec=suspendisse&pharetra=potenti&magna=nullam&vestibulum=porttitor&aliquet=lacus&ultrices=at&erat=turpis&tortor=donec&sollicitudin=posuere&mi=metus&sit=vitae&amet=ipsum&lobortis=aliquam&sapien=non&sapien=mauris&non=morbi&mi=non&integer=lectus&ac=aliquam&neque=sit&duis=amet&bibendum=diam&morbi=in&non=magna&quam=bibendum&nec=imperdiet&dui=nullam&luctus=orci&rutrum=pede&nulla=venenatis&tellus=non&in=sodales&sagittis=sed&dui=tincidunt&vel=eu&nisl=felis&duis=fusce&ac=posuere&nibh=felis&fusce=sed&lacus=lacus&purus=morbi&aliquet=sem&at=mauris&feugiat=laoreet&non=ut&pretium=rhoncus&quis=aliquet&lectus=pulvinar&suspendisse=sed",
		description:
			"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
		categories: ["News"],
		technologies: ["Figma"],
	},
	{
		id: "2",
		title: "Yoveo",
		cover: "http://dummyimage.com/138x100.png/ff4444/ffffff",
		link: "http://mapquest.com/amet/cursus.html?orci=faucibus&vehicula=accumsan&condimentum=odio&curabitur=curabitur&in=convallis&libero=duis&ut=consequat&massa=dui&volutpat=nec&convallis=nisi",
		description:
			"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
		categories: ["Portfolio"],
		technologies: ["Webflow"],
	},
	{
		id: "3",
		title: "Ozu",
		cover: "http://dummyimage.com/190x100.png/cc0000/ffffff",
		link: "http://geocities.com/imperdiet/et/commodo.html?in=volutpat&porttitor=erat&pede=quisque&justo=erat&eu=eros&massa=viverra&donec=eget&dapibus=congue&duis=eget&at=semper&velit=rutrum&eu=nulla&est=nunc&congue=purus&elementum=phasellus",
		description:
			"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
		categories: ["E-commerce"],
		technologies: ["Next.js"],
	},
	{
		id: "4",
		title: "Dabjam",
		cover: "http://dummyimage.com/220x100.png/ff4444/ffffff",
		link: "http://google.cn/dictumst/etiam/faucibus.aspx?odio=nam&porttitor=congue&id=risus&consequat=semper&in=porta&consequat=volutpat&ut=quam&nulla=pede&sed=lobortis&accumsan=ligula&felis=sit&ut=amet&at=eleifend&dolor=pede&quis=libero&odio=quis&consequat=orci&varius=nullam&integer=molestie&ac=nibh&leo=in&pellentesque=lectus&ultrices=pellentesque&mattis=at&odio=nulla&donec=suspendisse&vitae=potenti&nisi=cras&nam=in&ultrices=purus&libero=eu&non=magna&mattis=vulputate&pulvinar=luctus&nulla=cum&pede=sociis&ullamcorper=natoque&augue=penatibus&a=et&suscipit=magnis&nulla=dis&elit=parturient&ac=montes&nulla=nascetur&sed=ridiculus&vel=mus&enim=vivamus&sit=vestibulum&amet=sagittis&nunc=sapien&viverra=cum&dapibus=sociis&nulla=natoque&suscipit=penatibus&ligula=et&in=magnis&lacus=dis&curabitur=parturient&at=montes&ipsum=nascetur&ac=ridiculus",
		description:
			"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
		categories: ["News"],
		technologies: ["Webflow"],
	},
	{
		id: "5",
		title: "Avavee",
		cover: "http://dummyimage.com/246x100.png/cc0000/ffffff",
		link: "https://altervista.org/nisl/ut/volutpat/sapien/arcu/sed/augue.jsp?in=integer&tempor=aliquet&turpis=massa&nec=id&euismod=lobortis&scelerisque=convallis&quam=tortor&turpis=risus&adipiscing=dapibus&lorem=augue&vitae=vel&mattis=accumsan&nibh=tellus&ligula=nisi&nec=eu&sem=orci&duis=mauris&aliquam=lacinia&convallis=sapien&nunc=quis&proin=libero&at=nullam&turpis=sit&a=amet&pede=turpis&posuere=elementum&nonummy=ligula&integer=vehicula&non=consequat&velit=morbi&donec=a&diam=ipsum&neque=integer&vestibulum=a&eget=nibh&vulputate=in&ut=quis&ultrices=justo&vel=maecenas&augue=rhoncus&vestibulum=aliquam&ante=lacus&ipsum=morbi&primis=quis&in=tortor&faucibus=id&orci=nulla&luctus=ultrices&et=aliquet&ultrices=maecenas&posuere=leo&cubilia=odio&curae=condimentum&donec=id&pharetra=luctus&magna=nec&vestibulum=molestie&aliquet=sed&ultrices=justo&erat=pellentesque&tortor=viverra&sollicitudin=pede&mi=ac&sit=diam&amet=cras&lobortis=pellentesque&sapien=volutpat&sapien=dui&non=maecenas&mi=tristique&integer=est&ac=et&neque=tempus&duis=semper&bibendum=est&morbi=quam&non=pharetra&quam=magna&nec=ac&dui=consequat&luctus=metus&rutrum=sapien&nulla=ut&tellus=nunc&in=vestibulum&sagittis=ante&dui=ipsum&vel=primis&nisl=in&duis=faucibus&ac=orci&nibh=luctus&fusce=et&lacus=ultrices&purus=posuere&aliquet=cubilia&at=curae&feugiat=mauris",
		description:
			"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
		categories: ["E-commerce"],
		technologies: ["Webflow"],
	},
];

export default PROJECTS;
