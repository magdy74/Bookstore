const Books = [
	{
		id:1,
		title:'Rich Dad, Poor Dad',
		author:'Robert T. Kiyosaki',
		image:'https://m.media-amazon.com/images/I/71SXhdF4wBL._AC_SL1500_.jpg',
		rating:4.28,
		price:120,
		isbn:'',
		isbn13:'',
		pagesNumber:195,
		language: 'english',
		summary: `Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his "rich dad" — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.`

	},
	{
		id:2,
		title:'How to Win Friends and Influence People',
		author:'Dale Carnegie',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442726934i/4865.jpg',
		rating:4.22,
		price:125,
		isbn:'',
		isbn13:'',
		pagesNumber:288,
		language: 'english',
		summary: `"How to Win Friends and Influence People" by Dale Carnegie is a timeless self-help classic that provides practical advice on improving interpersonal relationships. Carnegie outlines fundamental principles for winning people over, such as showing genuine interest in others, listening actively, and giving sincere appreciation. The book emphasizes the importance of empathy, understanding others' perspectives, and avoiding criticism and condemnation. Through anecdotes and examples, Carnegie illustrates how these principles can be applied in various situations to enhance communication, build trust, and ultimately achieve success in both personal and professional life.`

	},
	{
		id:3,
		title:'The Lean Startup',
		author:'Eric Ries',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019.jpg',
		rating:4.11,
		price:160,
		isbn: '0307887898',
		isbn13:'9780307887894',
		pagesNumber:299,
		language: 'english',
		summary: `"The Lean Startup" advocates for a systematic approach to starting and growing businesses by emphasizing rapid experimentation, customer feedback, and iterative product development to minimize waste and maximize success.`
		
	},
	{
		id:4,
		title:'The 48 Laws of Power',
		author:'Robert Greene',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694722764i/1303.jpg',
		rating:4.15,
		price:200,
		isbn:'0140280197',
		isbn13:'9780140280197',
		pagesNumber:452,
		language: 'english',
		summary: `"The 48 Laws of Power" is a guidebook to understanding and mastering the dynamics of power. Authored by Robert Greene, it offers 48 laws or principles derived from historical examples and philosophical insights. These laws cover a wide range of tactics, from mastering emotions to manipulating perceptions, and are intended to help readers navigate complex social and professional situations. The book's overarching message is one of strategic thinking and awareness in pursuit of personal and professional goals.`

	},
	{
		id:5,
		title:'Influence: The Psychology of Persuasion',
		author:'Robert B. Cialdini',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391026083i/28815.jpg',
		rating:4.21,
		price:120,
		isbn:'006124189X',
		isbn13:'9780061241895',
		pagesNumber:320,
		language: 'english',
		summary: `"Influence: The Psychology of Persuasion" by Robert Cialdini explores the psychology behind why people say "yes" and how to effectively influence others. Cialdini outlines six key principles of persuasion, including reciprocity, commitment and consistency, social proof, authority, liking, and scarcity. Through research and real-world examples, he demonstrates how these principles can be used ethically to persuade others and make better decisions.`
	},
	{
		id:6,
		title:'Think and Grow Rich',
		author:'Napoleon Hill',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg',
		rating:4.18,
		price:120,
		isbn:'',
		isbn13:'',
		pagesNumber:233,
		language: 'english',
		summary: `"Think and Grow Rich" by Napoleon Hill is a classic self-help book that outlines principles for achieving success. Hill emphasizes the power of mindset, positive thinking, and goal setting in creating wealth and achieving one's dreams. Drawing on interviews with successful individuals, he presents a framework for personal development and financial success, including strategies for overcoming obstacles and maintaining persistence. The book advocates for the importance of belief in oneself and the power of the subconscious mind in manifesting one's desires.`

	},
	{
		id:7,
		title:'Atomic Habits',
		author:'James Clear',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg',
		rating:4.37,
		price:160,
		isbn:'0735211302',
		isbn13:'',
		pagesNumber:319,
		language: 'english',
		summary: `"Atomic Habits" by James Clear is a practical guide to building good habits and breaking bad ones. Clear emphasizes the power of small, incremental changes, or "atomic habits," in achieving significant improvements over time. He introduces a framework for habit formation based on four laws: make it obvious, make it attractive, make it easy, and make it satisfying. Through scientific research and real-life examples, Clear demonstrates how understanding and leveraging these laws can lead to lasting behavioral change and personal transformation.`
	},
	{
		id:8,
		title:'Thinking, Fast and Slow',
		author:'Daniel Kahneman',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg',
		rating:4.18,
		price:160,
		isbn:'0374275637',
		isbn13:'9780374275631',
		pagesNumber:499,
		language: 'english',
		summary: `"Thinking, Fast and Slow" by Daniel Kahneman explores the two systems of thought that drive human decision-making: the fast, intuitive "System 1" and the slower, more deliberate "System 2." Kahneman, a Nobel Prize-winning psychologist, delves into the cognitive biases and heuristics that influence our judgments and choices. He explains how these mental processes shape our perceptions, attitudes, and behaviors, and offers insights into how we can make better decisions by understanding and managing our cognitive biases. The book provides a fascinating look into the workings of the human mind and offers practical implications for improving decision-making in various aspects of life.`

	},
	{
		id:9,
		title:'The Psychology of Money',
		author:'Morgan Housel',
		image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg',
		rating:4.36,
		price:200,
		isbn:'',
		isbn13:'',
		pagesNumber:252,
		language: 'english',
		summary: `"The Psychology of Money" by Morgan Housel delves into the behavioral aspects of personal finance and investing. Housel explores the psychological factors that influence how people manage money, including emotions, biases, and societal norms. Through engaging anecdotes and insights, he highlights the importance of understanding one's relationship with money and making decisions that align with long-term financial goals. The book offers valuable lessons on topics such as risk-taking, patience, and the true meaning of wealth, providing readers with a deeper understanding of how to navigate the complex world of finance and achieve financial success.`
	}

]

export default Books;