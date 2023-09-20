import LogoInformation from './LogoInformation';

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-yellow-200 flex w-full p-8">
        <div className="flex mx-auto items-start justify-between gap-20">
          <div>
            <h3>Acesso Rápido</h3>
            <ul>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/pesquisa-e-pos-graduacao/pesquisador"
                  class="external-link"
                >
                  Apoio ao Pesquisador
                </a>
              </li>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/comissoes"
                  class="external-link"
                >
                  Comissões
                </a>
              </li>
              <li>
                <a
                  href="http://portal.utfpr.edu.br/login"
                  class="external-link"
                >
                  Login no portal
                </a>
              </li>
              <li>
                <a href="https://nuvem.utfpr.edu.br/" class="external-link">
                  Nuvem
                </a>
              </li>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/servidores/site"
                  class="external-link"
                >
                  Portal do Servidor
                </a>
              </li>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/servicos-internos/utfpr-digital"
                  class="external-link"
                >
                  UTFPR Digital
                </a>
              </li>
              <li>
                <a href="http://mail.utfpr.edu.br/" class="external-link">
                  Webmail
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Serviços</h3>
            <ul>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/comunicacao"
                  class="external-link"
                >
                  Área de imprensa
                </a>
              </li>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/contato/ouvidoria"
                  class="external-link"
                >
                  Ouvidoria
                </a>
              </li>
              <li>
                <a
                  href="https://portal.utfpr.edu.br/transparencia/"
                  class="external-link"
                >
                  Transparência
                </a>
              </li>
              <li>
                <a href="http://www.funtefpr.org.br" class="external-link">
                  Fundação de apoio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Redes sociais</h3>
            <ul>
              <li>
                <a href="http://facebook.com/utfpr" class="external-link">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.flickr.com/photos/168609044@N04/"
                  class="external-link"
                >
                  Flickr
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/utfpr_"
                  class="external-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/school/universidade-tecnol%C3%B3gica-federal-do-paran%C3%A1/"
                  class="external-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://bit.ly/utfpr_tk" class="external-link">
                  Tik Tok
                </a>
              </li>
              <li>
                <a href="https://bit.ly/utfpr_tk" class="external-link">
                  Tik Tok
                </a>
              </li>
              <li>
                <a href="https://twitter.com/utfpr_" class="external-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="http://youtube.com/canaldaUTFPR" class="external-link">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-col">
            <div>
              <h3>RSS</h3>
              <ul>
                <li>
                  <a
                    href="https://portal.utfpr.edu.br/english"
                    class="external-link"
                  >
                    English Version
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Navegação</h3>
              <ul>
                <li>
                  <a
                    href="https://portal.utfpr.edu.br/acessibilidade"
                    class="external-link"
                  >
                    Acessibilidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://portal.utfpr.edu.br/mapadosite"
                    class="external-link"
                  >
                    Mapa do site
                  </a>
                </li>
                <li>
                  <a
                    href="https://portal.utfpr.edu.br/english"
                    class="external-link"
                  >
                    English Version
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="p-8">
        <div id="wrapper-footer-brasil" className="flex items-center">
          <a href="http://www.acessoainformacao.gov.br/">
            <LogoInformation />
          </a>
          <a
            className="logo-governo-federal"
            href="http://www.brasil.gov.br/"
            alt="Governo Federal"
            title="Governo Federal"
          >
            Acesso à informações
          </a>
        </div>
      </div>
      <div className="p-8">
        <span>
          Desenvolvido com o CMS de código aberto{' '}
          <a href="https://plone.org/" alt="Link plone">
            Plone
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
