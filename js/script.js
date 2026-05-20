// Dados de produtos (demo) - imagens reais via Unsplash (source.unsplash.com)
// Produtos - URLs atualizadas para imagens legíveis/locais
const products = [
	{ id: 'p1', name: 'Smart TV 50" 4K', price: 1999.9, category: 'eletrônicos', img: 'images/smart-tv-50-4k/tv1.webp', desc: 'Smart TV 50 polegadas com HDR e conectividade Wi‑Fi.' },
	{ id: 'p2', name: 'Smartphone X Pro', price: 2899.0, category: 'celulares', img: 'images/smartphone-x-pro/shopping.webp', desc: 'Tela AMOLED, câmera tripla e bateria de longa duração.' },
	{ id: 'p3', name: 'Geladeira Frost Free', price: 3299.5, category: 'eletrodomésticos', img: 'images/geladeira-frost-free/geladeira1.jpg', desc: 'Frost free, grande capacidade e baixo consumo.' },
	{ id: 'p4', name: 'Notebook Ultrafino 14"', price: 4599.99, category: 'informática', img: 'images/notebook-ultrafino-14/notebook1.jpg', desc: 'Processador moderno, SSD e bateria para o dia todo.' },
	{ id: 'p5', name: 'Fone Bluetooth', price: 259.9, category: 'acessórios', img: 'images/fone-bluetooth/fone1.webp', desc: 'Conforto, cancelamento de ruído e carregamento rápido.' },
	{ id: 'p6', name: 'Micro-ondas 20L', price: 389.0, category: 'eletrodomésticos', img: 'images/microondas-20l/microondas1.jpg', desc: 'Compacto, funções auto e painel fácil.' },
	{ id: 'p7', name: 'Smartwatch Fit', price: 499.0, category: 'acessórios', img: 'images/smartwatch-fit/watch1.png', desc: 'Monitor de batimentos, GPS e notificações.' },
	{ id: 'p8', name: 'Câmera Digital 24MP', price: 1499.0, category: 'fotografia', img: 'images/camera-digital-24mp/camera1.jpg', desc: 'Zoom óptico e gravação em 4K.' }
];

// Estado do carrinho
let cart = {};

// Utils
const qs = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);
const formatCurrency = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Persistência
function loadCart(){
	try{
		const raw = localStorage.getItem('mg_cart');
		if(raw) cart = JSON.parse(raw);
	}catch(e){cart={}}
}
function saveCart(){
	localStorage.setItem('mg_cart', JSON.stringify(cart));
}

// Render
	function renderProductsBase(list=products){
	const container = qs('#products');
	container.innerHTML = '';
	if(list.length===0){container.innerHTML = '<p>Nenhum produto encontrado.</p>';return}
	list.forEach(p=>{
		const el = document.createElement('article');
		el.className = 'card';
		el.setAttribute('data-id', p.id);
		el.innerHTML = `
			<div class="img-wrap skeleton">
				<img src="${p.img}" alt="${p.name}" loading="lazy" />
			</div>
			<h3>${p.name}</h3>
			<div class="meta">
				<div>
					<div class="price">${formatCurrency(p.price)}</div>
					<div class="muted">${p.category}</div>
				</div>
				<div>
					<button class="btn ghost" data-id="${p.id}" data-action="view">Ver</button>
					<button class="btn primary" data-id="${p.id}" data-action="add">Adicionar</button>
				</div>
			</div>
		`;
		container.appendChild(el);
	});
}

function renderCategories(){
	const sel = qs('#category-filter');
	const cats = Array.from(new Set(products.map(p=>p.category)));
	cats.forEach(c=>{
		const opt = document.createElement('option'); opt.value=c; opt.textContent = c; sel.appendChild(opt);
	});
}

function renderCart(){
	const itemsWrap = qs('#cart-items');
	itemsWrap.innerHTML='';
	const ids = Object.keys(cart);
	if(ids.length===0){itemsWrap.innerHTML = '<p>Seu carrinho está vazio.</p>'; qs('#cart-total').textContent = '0,00'; updateCartCount(); return}
	ids.forEach(id=>{
		const qty = cart[id];
		const prod = products.find(p=>p.id===id);
		if(!prod) return;
		const item = document.createElement('div'); item.className='cart-item';
		item.innerHTML = `
			<img src="${prod.img}" alt="${prod.name}"/>
			<div style="flex:1">
				<div style="font-weight:700">${prod.name}</div>
				<div style="color:var(--muted);font-size:.9rem">${formatCurrency(prod.price)}</div>
				<div class="qty-controls">
					<button class="btn ghost" data-id="${id}" data-action="dec">-</button>
					<span style="min-width:26px;display:inline-block;text-align:center">${qty}</span>
					<button class="btn ghost" data-id="${id}" data-action="inc">+</button>
					<button class="btn" style="margin-left:8px" data-id="${id}" data-action="remove">Remover</button>
				</div>
			</div>
		`;
		itemsWrap.appendChild(item);
	});
	qs('#cart-total').textContent = calculateTotal().toFixed(2).replace('.',',');
	updateCartCount();
}

function calculateTotal(){
	return Object.keys(cart).reduce((s,id)=>{
		const prod = products.find(p=>p.id===id);
		if(!prod) return s;
		return s + prod.price * cart[id];
	},0);
}

function updateCartCount(){
	const count = Object.values(cart).reduce((a,b)=>a+b,0);
	qs('#cart-count').textContent = count;
}

// Cart actions
function addToCart(id, qty=1){
	cart[id] = (cart[id]||0) + qty;
	saveCart(); renderCart();
}

function updateQty(id, delta){
	if(!cart[id]) return;
	cart[id] += delta;
	if(cart[id] <= 0) delete cart[id];
	saveCart(); renderCart();
}

function removeFromCart(id){
	delete cart[id]; saveCart(); renderCart();
}

function clearCart(){cart = {}; saveCart(); renderCart();}

// Modal
	function openModal(prod){
	const modal = qs('#modal');
	const body = qs('#modal-body');
	body.innerHTML = `
		<div style="display:flex;gap:1rem;flex-wrap:wrap">
			<img src="${prod.img}" alt="${prod.name}" style="width:320px;height:220px;object-fit:cover;border-radius:8px"/>
			<div style="flex:1">
				<h2>${prod.name}</h2>
				<p style="color:var(--muted)">${prod.desc}</p>
				<p class="price">${formatCurrency(prod.price)}</p>
				<div style="margin-top:1rem;display:flex;gap:.5rem">
					<button class="btn primary" id="modal-add">Adicionar ao carrinho</button>
					<button class="btn ghost" id="modal-close-2">Fechar</button>
				</div>
			</div>
		</div>
	`;
	// accessibility: focus management
	modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
	// save last focused element to restore focus on close
	modal._lastFocused = document.activeElement;

	// find focusable elements in modal and focus first
	const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
	const firstFocusable = focusable[0] || qs('#modal-close');
	// ensure close button exists
	const closeBtn = qs('#modal-close');
	if(firstFocusable) firstFocusable.focus();

	// trap Tab inside modal
	function trap(e){
		if(e.key !== 'Tab') return;
		const nodes = Array.from(modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(n=>!n.hasAttribute('disabled'));
		if(nodes.length === 0) return;
		const first = nodes[0];
		const last = nodes[nodes.length-1];
		if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
		else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
	}
	modal._trapHandler = trap;
	document.addEventListener('keydown', trap);

	qs('#modal-add').addEventListener('click',()=>{ addToCart(prod.id); closeModal(); toggleCart(true); });
	qs('#modal-close-2').addEventListener('click',closeModal);
}
// closeModal: restaura foco e remove trap de teclado
function closeModal(){
    const modal = qs('#modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    if(modal._trapHandler) document.removeEventListener('keydown', modal._trapHandler);
    const last = modal._lastFocused || document.body;
    if(last && typeof last.focus === 'function') last.focus();
}

// after render, wire image load to remove skeleton and fade in image
function renderProducts(list=products){
    renderProductsBase(list);
	// find images inside .img-wrap and attach load handlers
	qsa('.img-wrap').forEach(w=>{
		const img = w.querySelector('img');
		if(!img) return;
		if(img.complete){ img.style.opacity = '1'; w.classList.remove('skeleton'); }
		else{
			img.addEventListener('load', ()=>{ img.style.opacity = '1'; w.classList.remove('skeleton'); });
			img.addEventListener('error', ()=>{
				// fallback inline SVG to avoid broken image when remote host blocks or offline
				w.classList.remove('skeleton');
				img.style.opacity = '1';
				const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#eceff6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial, Helvetica, sans-serif" font-size="20">Imagem indisponível</text></svg>';
				img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
			});
		}
	});
}

// Toggle cart
function toggleCart(open){
	const cartEl = qs('#cart');
	if(open){cartEl.classList.add('open'); cartEl.setAttribute('aria-hidden','false');}
	else{cartEl.classList.remove('open'); cartEl.setAttribute('aria-hidden','true');}
}

// Search + filter + sort
function doSearchSortFilter(){
	const q = qs('#search').value.trim().toLowerCase();
	const cat = qs('#category-filter').value;
	const sort = qs('#sort-select').value;
	let list = products.filter(p => {
		const matchQ = q === '' || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
		const matchCat = cat === 'all' || p.category === cat;
		return matchQ && matchCat;
	});

	// Se não houver texto na busca, escondemos produtos marcados como `showOnSearchOnly`
	if(q === ''){
		list = list.filter(p => !p.showOnSearchOnly);
	}
	if(sort === 'price-asc'){
		// encontrar o menor preço dentro da lista atual (já filtrada por busca/categoria)
		const min = list.reduce((acc, p)=> acc === null || p.price < acc.price ? p : acc, null);
		list = min ? [min] : [];
	} else if(sort === 'price-desc'){
		// encontrar o maior preço dentro da lista atual (já filtrada por busca/categoria)
		const max = list.reduce((acc, p)=> acc === null || p.price > acc.price ? p : acc, null);
		list = max ? [max] : [];
	} else if(sort === 'name-asc'){
		list.sort((a,b)=>a.name.localeCompare(b.name));
	}
	renderProducts(list);
}

// Debounce helper
function debounce(fn,wait=250){let t;return (...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),wait);};}

// Delegation for product buttons and cart buttons
function globalHandler(e){
	const btn = e.target.closest('button');
	if(!btn) return;
	const action = btn.dataset.action;
	const id = btn.dataset.id;
	if(action === 'add') addToCart(id);
	if(action === 'view'){ const prod = products.find(p=>p.id===id); if(prod) openModal(prod); }
	if(action === 'inc') updateQty(id, 1);
	if(action === 'dec') updateQty(id, -1);
	if(action === 'remove') removeFromCart(id);
}

// Inicialização
function init(){
	loadCart(); renderCategories();
	renderCart();

	// eventos
	document.addEventListener('click', globalHandler);
	qs('#btn-cart').addEventListener('click',()=>toggleCart(true));
	qs('#close-cart').addEventListener('click',()=>toggleCart(false));
	qs('#clear-cart').addEventListener('click',()=>{ if(confirm('Esvaziar o carrinho?')) clearCart(); });
	qs('#checkout').addEventListener('click',()=>{
		if(Object.keys(cart).length===0){alert('Seu carrinho está vazio.');return}
		alert('Compra simulada! Obrigado.'); clearCart(); toggleCart(false);
	});
	qs('#modal-close').addEventListener('click',closeModal);

	qs('#search').addEventListener('input', debounce(doSearchSortFilter,300));
	qs('#category-filter').addEventListener('change', doSearchSortFilter);
	qs('#sort-select').addEventListener('change', doSearchSortFilter);

	// fechar modal com ESC
	document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeModal(); toggleCart(false); } });

	// apply initial filter/sort render (respects showOnSearchOnly)
	doSearchSortFilter();
}

init();
