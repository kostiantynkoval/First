<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" href="fancybox/source/jquery.fancybox.css" type="text/css" media="screen" />
</head>
<body>
	<header>
		<div class="logo">
			<img src="img/LogoMaiia.png">
		</div>
		<nav>
			<ul>
				<li><a href="#order">Записаться</a></li>
				<li><a href="#gallery">Галерея</a></li>
				<li><a href="#prices">Прайс-лист</a></li>
				<li><a href="#contacts">Контакты</a></li>
			</ul>
		</nav>
	</header>
	<section class="sectionBlock" id="order">
		<div class="nailFrench">
			<img src="img/french.jpg">
			<div class="orderBlock">
				<div class="orderBlockInner">
					<a id="orderVisit" href="#">Записаться</a>
				</div>
			</div>
		</div>
	</section>
	<section class="sectionBlock" id="gallery">
		<img class="bg-gallery" src="img/fon-gallery.jpg">
		<div class="container">
			<?php
				for ($i=0; $i < 20; $i++) { 
					echo "<a href=\"Big/".$i.".jpg\" class=\"fancybox\" rel=\"group\">";
					echo "<img src=\"Small/1".$i.".jpg\">";
					echo "</a>";
				}
			?>	
		</div>
	</section>
	<section class="sectionBlock" id="prices">
		<img src="img/fon-prices.jpg">
		<table>
			<thead>
				<tr>
					<th>№ пп</th>
					<th>Наименование услуги</th>
					<th>Цена, грн</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Наращивание ногтей</td>
					<td>200</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Коррекция ногтей</td>
					<td>120</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Художественная роспись</td>
					<td>30/1 ноготь</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Камни Сваровски</td>
					<td>10/1 камень</td>
				</tr>
				<tr>
					<td>5</td>
					<td>Педикюр</td>
					<td>50</td>
				</tr>
				<tr>
					<td>6</td>
					<td>Чай, Кофе, Печенье, WIFI</td>
					<td>Бесплатно</td>
				</tr>
			</tbody>
		</table>
	</section>
	<section class="sectionBlock" id="contacts">
		<div class="contactsHeader">
			<section class="adress-bar">
				<p>Будем рады видеть Вас у нас в гостях</p>
				<p><strong>Наш Адрес</strong></p>
				<p>Запорожская обл.</p>
				<p>пгт. Кушугум</p>
				<p>ул. Зоряна(Совхозная), д. 17</p>
				<p><strong>Телефоны</strong></p>
				<p>+380 97 590-28-43</p>
				<p>+380 93 079-05-00</p>
			</section>
			<section class="messageForm">
				<form action="">
					<input type="text" placeholder="Имя">
					<input type="email" placeholder="Почта">
					<input type="text" placeholder="Тема">
					<textarea name="" id="" columns="30" rows="8" placeholder="Сообщение"></textarea>
					<input type="submit" value="Отправить">
				</form>	
			</section>
		</div>
		<section>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.7857642390345!2d35.20233136652181!3d47.72740698959644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQzJzM4LjciTiAzNcKwMTInMTQuMCJF!5e0!3m2!1sru!2sua!4v1483915312738" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
		</section>
		

	</section>
	<footer>
		
	</footer>
	<script type="text/javascript" src="js/libs.min.js"></script>
	<script type="text/javascript" src="fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
	<script type="text/javascript" src="js/common.js"></script>
</body>
</html>