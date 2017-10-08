let header = document.querySelector('.header');

let fragment = document.createDocumentFragment();

let div = document.createElement('div');
div.className = "filterbar";

div.innerHTML = `
                <div class="filterbar--content">
                <select class="filterbar__select" name="country">
                    <option value="usa">Australia</option>
                    <option value="usa">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <input class="filterbar__searchbar" type="text" name="search" placeholder="Search..">
                </div>
                `;

fragment.appendChild(div);
header.appendChild(fragment);


            