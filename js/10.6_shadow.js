// light DOM - обычное дерево
// Shadow DOM - это теневое дерево

const h3 = document.getElementById('header');

h3.attachShadow({ mode: 'open' }); // 'closed'
h3.shadowRoot.innerHTML = `
    <style> 
        span { color: orange; }
    </style>

    <span> hello world </span>
`;