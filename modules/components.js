export const header = () => `
      <header>
        <nav>
          <div class="logo">Awesome Books</div>
          <div>
            <ul>
              <li>
                <a class="nav-item-list" href="#">
                  List
                </a>
              </li>
              <li>
                <a class="nav-item-add" href="#">
                  Add new
                </a>
              </li>
              <li>
                <a class="nav-item-contact" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="date">
        <span></span>
      </div>
      <main></main>`;

export const booksList = () => `
    <h1 class = "heading">All awesome books</h1>
    <section id="articles"></section>
  `;

export const addBook = () => `
      <section id="add-book" class="add-book hidden">
        <h2>Add a new book</h2>
        <form id="article-form">
          <div>
            <label>
              <input type="text" name="titleText" placeholder="Title" />
            </label>
          </div>
          <div>
            <label>
              <input type="text" name="authorText" placeholder="Author" />
            </label>
          </div>
          <div>
            <button class="addButton" type="submit" name="save">
              Add
            </button>
          </div>
        </form>
      </section>`;

export const contactIfno = () => `<section id="contact-info" class="contact-info hidden">
            <h2>Contact information</h2>
            <div>
                <div>
                    <p>Do you have any question or you just want to say "Hello"?</p>
                    <p>You can reach out to us!</p>
                    <ul>
                        <li>Our e-mail: mail@mail.com</li>
                        <li>Our phone number: 0043586534422</li>
                        <li>Our addres: Streetname 22, 84503 City, Country</li>
                    </ul>
                </div>
            </div>
        </section>`;

export const footer = () => `
    <footer>
      <div class="footer-wrap">
        <div>
          <span>Copyright</span>
        </div>
      </div>
    </footer>`;
