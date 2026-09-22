// Navbar dynamique : changement de l'onglet actif
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');
        
    });
});

// Hamburger menu responsive + bouton de fermeture
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const closeMenuBtn = document.querySelector('.close-menu-btn');

function openMenu() {
    navList.classList.add('open');
    navList.classList.remove('closing');
    if(closeMenuBtn) closeMenuBtn.style.display = 'block';
}
function closeMenu() {
    navList.classList.add('closing');
    navList.classList.remove('open');
    setTimeout(() => {
        navList.classList.remove('closing');
        if(closeMenuBtn) closeMenuBtn.style.display = 'none';
    }, 400);
}
hamburger.addEventListener('click', openMenu);
if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
// Fermer le menu si on clique sur un lien (mobile)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if(window.innerWidth <= 700) {
            closeMenu();
        }
    });
});

// Variables globales
const htmlTag = document.documentElement;
const translations = {
    fr: {
        accueil: 'Accueil',
        aPropos: 'À propos',
        palmares: 'Palmarès',
        bureau: 'Bureau',
        evenements: 'Événements',
        revue: 'Revue',
        contact: 'Contact',
        label: 'FR',
        anniversaryTitle: '🎉 Anniversaire du club',
        anniversaryText: 'Le club a été fondé le <b>23 octobre 2020</b> <span style="font-size:1.2em">🎂</span>',
        historyTitle: '📜 Histoire du Club',
        historySubtitle: 'Les fondateurs et créateurs qui ont bâti Great Debaters EHTP',
        founder: 'Fondateur',
        firstMilestone: 'Premier jalon',
        coFounders: 'Co-fondateurs',
        logoCreator: 'Créateur du logo',
        firstVEEOrganizer: 'Première organisatrice VEE',
        siteDeveloper: 'Développeur du site',
        competitionsTitle: '🏆 Compétitions Gagnées',
        competitionsSubtitle: 'Nos victoires et trophées dans les compétitions de débat',
        agoraTitle: 'Agora ENCG Casablanca',
        agoraDescription: 'Première place à la compétition de débat Agora organisée par l\'ENCG Casablanca',
        agoraTheme: 'L\'Afrique entre mémoire et espoir: Une quête d\'identité et d\'innovation',
        agoraSection: 'Section: Arabe',
        veeTitle: 'Valse des Esprits Éclairés (VEE)',
        veeDescription: 'Première place à la compétition de débat VEE',
        veeTheme: 'L\'humanité entre transhumanisme et déshumanisation',
        veeSection: 'Section: Arabe',
        grandDebatTitle: 'Grand Débat',
        grandDebatDescription: 'Première place à la compétition de débat Grand Débat',
        grandDebatTheme: '',
        grandDebatSection: 'Section: Arabe',
        victoriaVerbaTitle: 'Victoria Verba à l\'ENSAM',
        victoriaVerbaDescription: 'Première place à la compétition de débat Victoria Verba',
        victoriaVerbaTheme: 'Vaincre ou être vaincu',
        victoriaVerbaSection: 'Section: Arabe',
        invictusTitle: 'Invictus à ENCG Fès',
        invictusDescription: 'Première place à la compétition de débat Invictus',
        invictusTheme: 'L\'homme est un loup pour l\'homme',
        invictusSection: 'Section: Arabe',
        allStarTitle: 'All Star Debate',
        allStarDescription: 'Participation à la compétition de débat All Star Debate',
        allStarTheme: 'Compétition d\'élite des meilleurs débatteurs',
        allStarSection: 'Section: Arabe',
        participants: 'Participants',
        allStarChampionTitle: 'All Star Debate - Champion',
        allStarChampionDescription: 'Victoire à la compétition de débat All Star Debate',
        allStarChampionTheme: 'Compétition d\'élite des meilleurs débatteurs',
        allStarChampionSection: 'Section: Arabe',
        allStarNationalChampionTitle: 'All Star Debate - Champion National',
        allStarNationalChampionDescription: 'Mohamed El Afi - Champion National dans All Star Debate',
        allStarNationalChampionTheme: 'Compétition d\'élite des meilleurs débatteurs',
        allStarNationalChampionSection: 'Section: Arabe',
        champion: 'Champion',
        winningTeam: 'Équipe Gagnante',
        teamMembers: 'Membres de l\'équipe',
        evenementsTitle: '🎪 Notre Événement',
        evenementsSubtitle: 'Découvrez notre événement majeur et nos moments forts',
        veeTitle: 'La Valse des Esprits Éclairés',
        veeDescription: 'Notre événement phare annuel de débat',
        veeDate: 'Date à venir',
        veeLocation: 'EHTP, Casablanca',
        bureauTitle: '🏛️ Bureau Exécutif',
        bureauSubtitle: 'Notre équipe dirigeante dédiée à l\'excellence',
        president: 'Président',
        vicePresident: 'Vice-Président',
        secretaryGeneral: 'Secrétaire Général',
        mediaDesignChief: 'Chef Media & Design',
        frenchSectionChief: 'Chef Section Française',
        englishSectionChief: 'Chef Section Anglaise',
        arabicSectionChief: 'Chef Section Arabe',
        sponsoringChief: 'Chef Sponsoring',
        trainingChief: 'Chef Formation',
        revueTitle: '📚 Revue',
        revueSubtitle: 'Découvrez nos publications et articles de débat',
        revueDescription: 'Notre revue est un espace dédié à la publication d\'articles, d\'analyses et de réflexions sur le débat, l\'éloquence et les sujets d\'actualité.'
    },
    en: {
        accueil: 'Home',
        aPropos: 'About',
        palmares: 'Awards',
        bureau: 'Board',
        evenements: 'Events',
        revue: 'Review',
        contact: 'Contact',
        label: 'EN',
        anniversaryTitle: '🎉 Club Anniversary',
        anniversaryText: 'The club was founded on <b>October 23, 2020</b> <span style="font-size:1.2em">🎂</span>',
        historyTitle: '📜 Club History',
        historySubtitle: 'The founders and creators who built Great Debaters EHTP',
        founder: 'Founder',
        firstMilestone: 'First milestone',
        coFounders: 'Co-founders',
        logoCreator: 'Logo creator',
        firstVEEOrganizer: 'First VEE organizer',
        siteDeveloper: 'Site developer',
        competitionsTitle: '🏆 Won Competitions',
        competitionsSubtitle: 'Our victories and trophies in debate competitions',
        agoraTitle: 'Agora ENCG Casablanca',
        agoraDescription: 'First place in the Agora debate competition organized by ENCG Casablanca',
        agoraTheme: 'Africa between memory and hope: A quest for identity and innovation',
        agoraSection: 'Section: Arabic',
        veeTitle: 'Valse des Esprits Éclairés (VEE)',
        veeDescription: 'First place in the VEE debate competition',
        veeTheme: 'Humanity between transhumanism and dehumanization',
        veeSection: 'Section: Arabic',
        grandDebatTitle: 'Grand Débat',
        grandDebatDescription: 'First place in the Grand Débat debate competition',
        grandDebatTheme: '',
        grandDebatSection: 'Section: Arabic',
        victoriaVerbaTitle: 'Victoria Verba at ENSAM',
        victoriaVerbaDescription: 'First place in the Victoria Verba debate competition',
        victoriaVerbaTheme: 'Win or be defeated',
        victoriaVerbaSection: 'Section: Arabic',
        invictusTitle: 'Invictus at ENCG Fès',
        invictusDescription: 'First place in the Invictus debate competition',
        invictusTheme: 'Man is a wolf to man',
        invictusSection: 'Section: Arabic',
        allStarTitle: 'All Star Debate',
        allStarDescription: 'Participation in the All Star Debate competition',
        allStarTheme: 'Elite competition of the best debaters',
        allStarSection: 'Section: Arabic',
        participants: 'Participants',
        allStarChampionTitle: 'All Star Debate - Champion',
        allStarChampionDescription: 'Victory in the All Star Debate competition',
        allStarChampionTheme: 'Elite competition of the best debaters',
        allStarChampionSection: 'Section: Arabic',
        allStarNationalChampionTitle: 'All Star Debate - National Champion',
        allStarNationalChampionDescription: 'Mohamed El Afi - National Champion in All Star Debate',
        allStarNationalChampionTheme: 'Elite competition of the best debaters',
        allStarNationalChampionSection: 'Section: Arabic',
        champion: 'Champion',
        winningTeam: 'Winning Team',
        teamMembers: 'Team Members',
        evenementsTitle: '🎪 Our Event',
        evenementsSubtitle: 'Discover our major event and highlights',
        veeTitle: 'The Waltz of Enlightened Spirits',
        veeDescription: 'Our flagship annual debate event',
        veeDate: 'Date to be announced',
        veeLocation: 'EHTP, Casablanca',
        bureauTitle: '🏛️ Executive Board',
        bureauSubtitle: 'Our dedicated leadership team for excellence',
        president: 'President',
        vicePresident: 'Vice-President',
        secretaryGeneral: 'Secretary General',
        mediaDesignChief: 'Media & Design Chief',
        frenchSectionChief: 'French Section Chief',
        englishSectionChief: 'English Section Chief',
        arabicSectionChief: 'Arabic Section Chief',
        sponsoringChief: 'Sponsoring Chief',
        trainingChief: 'Training Chief',
        revueTitle: '📚 Review',
        revueSubtitle: 'Discover our publications and debate articles',
        revueDescription: 'Our review is a space dedicated to publishing articles, analyses and reflections on debate, eloquence and current affairs.'
    },
    ar: {
        accueil: 'الرئيسية',
        aPropos: 'حول',
        palmares: 'الجوائز',
        bureau: 'المكتب',
        evenements: 'الأحداث',
        revue: 'المجلة',
        contact: 'اتصل',
        label: 'AR',
        anniversaryTitle: '🎉 ذكرى تأسيس النادي',
        anniversaryText: 'تأسس النادي في <b>23 أكتوبر 2020</b> <span style="font-size:1.2em">🎂</span>',
        historyTitle: '📜 تاريخ النادي',
        historySubtitle: 'المؤسسون والمبدعون الذين بنوا Great Debaters EHTP',
        founder: 'المؤسس',
        firstMilestone: 'أول معلم',
        coFounders: 'المؤسسون المشاركون',
        logoCreator: 'مصمم الشعار',
        firstVEEOrganizer: 'أول منظم VEE',
        siteDeveloper: 'مطور الموقع',
        competitionsTitle: '🏆 المسابقات المربوحة',
        competitionsSubtitle: 'انتصاراتنا وأجوائنا في مسابقات المناظرة',
        agoraTitle: 'أغورا ENCG الدار البيضاء',
        agoraDescription: 'المركز الأول في مسابقة المناظرة أغورا التي نظمتها ENCG الدار البيضاء',
        agoraTheme: 'أفريقيا بين الذاكرة والأمل: بحث عن الهوية والابتكار',
        agoraSection: 'القسم: العربية',
        veeTitle: 'Valse des Esprits Éclairés (VEE)',
        veeDescription: 'المركز الأول في مسابقة المناظرة VEE',
        veeTheme: 'الإنسانية بين الترانزومانية وإزالة الإنسانية',
        veeSection: 'القسم: العربية',
        grandDebatTitle: 'Grand Débat',
        grandDebatDescription: 'المركز الأول في مسابقة المناظرة Grand Débat',
        grandDebatTheme: '',
        grandDebatSection: 'القسم: العربية',
        victoriaVerbaTitle: 'Victoria Verba في ENSAM',
        victoriaVerbaDescription: 'المركز الأول في مسابقة المناظرة Victoria Verba',
        victoriaVerbaTheme: 'الانتصار أو الهزيمة',
        victoriaVerbaSection: 'القسم: العربية',
        invictusTitle: 'Invictus في ENCG فاس',
        invictusDescription: 'المركز الأول في مسابقة المناظرة Invictus',
        invictusTheme: 'الإنسان ذئب للإنسان',
        invictusSection: 'القسم: العربية',
        allStarTitle: 'All Star Debate',
        allStarDescription: 'المشاركة في مسابقة المناظرة All Star Debate',
        allStarTheme: 'مسابقة النخبة لأفضل المناظرين',
        allStarSection: 'القسم: العربية',
        participants: 'المشاركون',
        allStarChampionTitle: 'All Star Debate - البطل',
        allStarChampionDescription: 'الفوز في مسابقة المناظرة All Star Debate',
        allStarChampionTheme: 'مسابقة النخبة لأفضل المناظرين',
        allStarChampionSection: 'القسم: العربية',
        allStarNationalChampionTitle: 'All Star Debate - بطل وطني',
        allStarNationalChampionDescription: 'محمد الأفيعي - بطل وطني في All Star Debate',
        allStarNationalChampionTheme: 'مسابقة النخبة لأفضل المناظرين',
        allStarNationalChampionSection: 'القسم: العربية',
        champion: 'البطل',
        winningTeam: 'الفريق الفائز',
        teamMembers: 'أعضاء الفريق',
        evenementsTitle: '🎪 حدثنا',
        evenementsSubtitle: 'اكتشفوا حدثنا الرئيسي ولحظاتنا المميزة',
        veeTitle: 'فالس الأرواح المستنيرة',
        veeDescription: 'حدثنا السنوي الرئيسي للمناظرة',
        veeDate: 'التاريخ سيُعلن لاحقاً',
        veeLocation: 'EHTP، الدار البيضاء',
        bureauTitle: '🏛️ المكتب التنفيذي',
        bureauSubtitle: 'فريقنا القيادي المكرس للتميز',
        president: 'الرئيس',
        vicePresident: 'نائب الرئيس',
        secretaryGeneral: 'الأمين العام',
        mediaDesignChief: 'رئيس الإعلام والتصميم',
        frenchSectionChief: 'رئيس القسم الفرنسي',
        englishSectionChief: 'رئيس القسم الإنجليزي',
        arabicSectionChief: 'رئيس القسم العربي',
        sponsoringChief: 'رئيس الرعاية',
        trainingChief: 'رئيس التدريب',
        revueTitle: '📚 المجلة',
        revueSubtitle: 'اكتشفوا منشوراتنا ومقالات المناظرة',
        revueDescription: 'مجلتنا هي مساحة مخصصة لنشر المقالات والتحليلات والتأملات حول المناظرة والبلاغة وموضوعات الساعة.'
    }
};
const mainContent = document.getElementById('main-content');
const sectionContents = {
    fr: {
        accueil: '<h2>Bienvenue sur le site du club Great Debaters EHTP !</h2><p>Découvrez nos activités, notre palmarès et rejoignez-nous !</p>',
        palmares: '<h2>Palmarès</h2><p>Voici les distinctions et prix remportés par notre club.</p>',
        bureau: '<h2>Bureau</h2><p>Rencontrez les membres du bureau du club.</p>',
        revue: '<h2>Revue</h2><p>Consultez nos publications et revues.</p>',
        contact: `
            <section class="contact-section">
                <div class="contact-header">
                    <h2>Contactez-nous</h2>
                    <p>Nous sommes là pour répondre à toutes vos questions et collaborations</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Adresse</h3>
                                <p>École Hassania des Travaux Publics<br>Route d'El Jadida, Km 7<br>Casablanca, Maroc</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Email</h3>
                                <p>great.debaters.ehtp@gmail.com</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Téléphone</h3>
                                <p>+212  7 02 24 55 29</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h3>Suivez-nous</h3>
                            <div class="social-links">
                                <a href="#" class="social-link facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="social-link twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
                                <label for="nom">Nom</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required>
                                <label for="prenom">Prénom</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" id="telephone" name="telephone" placeholder="Votre téléphone" required>
                                <label for="telephone">Téléphone</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Votre email" required>
                                <label for="email">Email</label>
                            </div>
                            
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>
                                <label for="message">Message</label>
                            </div>
                            
                            <button type="submit" class="submit-btn">
                                <span>Envoyer le message</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="map-container">
                    <h3>Notre localisation</h3>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.654321!3d33.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM2LjAiTiA3wrAzOScxNS41Ilc!5e0!3m2!1sfr!2sma!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        `
    },
    en: {
        accueil: '<h2>Welcome to the Great Debaters EHTP club website!</h2><p>Discover our activities, achievements, and join us!</p>',
        palmares: '<h2>Awards</h2><p>Here are the awards and prizes won by our club.</p>',
        bureau: '<h2>Board</h2><p>Meet the club board members.</p>',
        revue: '<h2>Review</h2><p>Check out our publications and reviews.</p>',
        contact: `
            <section class="contact-section">
                <div class="contact-header">
                    <h2>Contact Us</h2>
                    <p>We are here to answer all your questions and collaborations</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Address</h3>
                                <p>Hassania School of Public Works<br>Route d'El Jadida, Km 7<br>Casablanca, Morocco</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Email</h3>
                                <p>great.debaters.ehtp@gmail.com</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Phone</h3>
                                <p>+212  7 02 24 55 29</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h3>Follow Us</h3>
                            <div class="social-links">
                                <a href="#" class="social-link facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="social-link twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" id="nom" name="nom" placeholder="Your name" required>
                                <label for="nom">Name</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="prenom" name="prenom" placeholder="Your first name" required>
                                <label for="prenom">First Name</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" id="telephone" name="telephone" placeholder="Your phone" required>
                                <label for="telephone">Phone</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Your email" required>
                                <label for="email">Email</label>
                            </div>
                            
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                                <label for="message">Message</label>
                            </div>
                            
                            <button type="submit" class="submit-btn">
                                <span>Send Message</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="map-container">
                    <h3>Our Location</h3>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.654321!3d33.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM2LjAiTiA3wrAzOScxNS41Ilc!5e0!3m2!1sfr!2sma!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        `
    },
    ar: {
        accueil: '<h2>مرحبًا بكم في موقع نادي المناظرات الكبرى EHTP!</h2><p>اكتشفوا أنشطتنا وإنجازاتنا وانضموا إلينا!</p>',
        palmares: '<h2>الجوائز</h2><p>هذه هي الجوائز والتكريمات التي حصل عليها نادينا.</p>',
        bureau: '<h2>المكتب</h2><p>تعرفوا على أعضاء مكتب النادي.</p>',
        revue: '<h2>المجلة</h2><p>تصفحوا منشوراتنا ومجلاتنا.</p>',
        contact: `
            <section class="contact-section">
                <div class="contact-header">
                    <h2>اتصلوا بنا</h2>
                    <p>نحن هنا للإجابة على جميع أسئلتكم والتعاون معكم</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>العنوان</h3>
                                <p>المدرسة الحسنية للأشغال العمومية<br>طريق الجديدة، كم 7<br>الدار البيضاء، المغرب</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>البريد الإلكتروني</h3>
                                <p>great.debaters.ehtp@gmail.com</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h3>الهاتف</h3>
                                <p>+212  7 02 24 55 29</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h3>تابعونا</h3>
                            <div class="social-links">
                                <a href="#" class="social-link facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="social-link twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" id="nom" name="nom" placeholder="اسمك" required>
                                <label for="nom">الاسم</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="prenom" name="prenom" placeholder="اسمك الأول" required>
                                <label for="prenom">الاسم الأول</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" id="telephone" name="telephone" placeholder="هاتفك" required>
                                <label for="telephone">الهاتف</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="بريدك الإلكتروني" required>
                                <label for="email">البريد الإلكتروني</label>
                            </div>
                            
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="رسالتك" rows="5" required></textarea>
                                <label for="message">الرسالة</label>
                            </div>
                            
                            <button type="submit" class="submit-btn">
                                <span>إرسال الرسالة</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="map-container">
                    <h3>موقعنا</h3>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.654321!3d33.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM2LjAiTiA3wrAzOScxNS41Ilc!5e0!3m2!1sfr!2sma!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        `
    }
};
const exploreBtnHTML = {
    fr: `<div class='explore-btn-wrapper'><a href="#" class="explore-btn">Explorez</a></div>`,
    en: `<div class='explore-btn-wrapper'><a href="#" class="explore-btn">Explore</a></div>`,
    ar: `<div class='explore-btn-wrapper'><a href="#" class="explore-btn">استكشف</a></div>`
};
const carouselHTML = {
    fr: `
        <section id="carousel-section" class="carousel-section">
            <div class="carousel-container">
                <div class="carousel">
                    <div class="carousel-slide active">
                        <img src="_52A5326.jpg" alt="Photo 1">
                    </div>
                    <div class="carousel-slide">
                        <img src="IMG-20250605-WA0011.jpg" alt="Photo 2">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5289.jpg" alt="Photo 3">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5326.jpg" alt="Photo 4">
                    </div>
                    <div class="carousel-slide">
                        <img src="3 brrothers.jpg" alt="Photo 5">
                    </div>
                </div>
                <button class="carousel-btn prev" aria-label="Précédent"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-btn next" aria-label="Suivant"><i class="fas fa-chevron-right"></i></button>
            </div>
            <h1 class="carousel-title">The Great Debaters EHTP</h1>
            <blockquote class="carousel-quote">"L'éloquence est l'art de dire les bonnes choses au bon moment"</blockquote>
            ${exploreBtnHTML.fr}
        </section>
    `,
    en: `
        <section id="carousel-section" class="carousel-section">
            <div class="carousel-container">
                <div class="carousel">
                    <div class="carousel-slide active">
                        <img src="Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg" alt="Photo 1">
                    </div>
                    <div class="carousel-slide">
                        <img src="Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg" alt="Photo 2">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5289.jpg" alt="Photo 3">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5326.jpg" alt="Photo 4">
                    </div>
                    <div class="carousel-slide">
                        <img src="3 brrothers.jpg" alt="Photo 5">
                    </div>
                </div>
                <button class="carousel-btn prev" aria-label="Previous">&#10094;</button>
                <button class="carousel-btn next" aria-label="Next">&#10095;</button>
            </div>
            <h1 class="carousel-title">Great Debaters EHTP</h1>
            <blockquote class="carousel-quote">"Debate is not a battlefield, but a workshop of ideas where mutual understanding is forged."</blockquote>
            ${exploreBtnHTML.en}
        </section>
    `,
    ar: `
        <section id=\"carousel-section\" class=\"carousel-section\">
            <div class=\"carousel-container\">
                <div class=\"carousel\">
                    <div class=\"carousel-slide active\">
                        <img src=\"Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg\" alt=\"الصورة 1\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg\" alt=\"الصورة 2\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"_52A5289.jpg\" alt=\"الصورة 3\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"_52A5326.jpg\" alt=\"الصورة 4\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"3 brrothers.jpg\" alt=\"الصورة 5\">
                    </div>
                </div>
                <button class=\"carousel-btn prev\" aria-label=\"السابق\">&#10094;</button>
                <button class=\"carousel-btn next\" aria-label=\"التالي\">&#10095;</button>
            </div>
            <h1 class=\"carousel-title\">Great Debaters EHTP</h1>
            <blockquote class=\"carousel-quote\">« المناظرة ليست ساحة معركة، بل ورشة أفكار يُصاغ فيها الفهم المتبادل »</blockquote>
            ${exploreBtnHTML.ar}
        </section>
    `
};
let currentLang = 'fr'; // français par défaut
let currentSection = 'accueil';

// === VARIABLES DE TRADUCTION GLOBALES ===
const cellTranslations = {
    fr: [
        { title: 'Sponsoring', desc: 'Recherche de partenaires, gestion des sponsors et financement des activités du club.' },
        { title: 'Média & Design', desc: 'Création de contenus visuels, gestion des réseaux sociaux et communication du club.' },
        { title: 'Formation', desc: 'Organisation des ateliers, coaching des membres et développement des compétences en débat.' },
        { title: 'Revue', desc: "Rédaction d'articles, gestion de la revue du club et valorisation des productions intellectuelles." }
    ],
    en: [
        { title: 'Sponsorship', desc: 'Seeking partners, managing sponsors, and funding club activities.' },
        { title: 'Media & Design', desc: 'Creating visual content, managing social media, and club communication.' },
        { title: 'Training', desc: 'Organizing workshops, coaching members, and developing debating skills.' },
        { title: 'Review', desc: 'Writing articles, managing the club review, and promoting intellectual productions.' }
    ],
    ar: [
        { title: 'الرعاية', desc: 'البحث عن شركاء، إدارة الرعاة، وتمويل أنشطة النادي.' },
        { title: 'الإعلام والتصميم', desc: 'إنشاء محتوى مرئي، إدارة وسائل التواصل، والتواصل للنادي.' },
        { title: 'التكوين', desc: 'تنظيم ورش العمل، تدريب الأعضاء، وتطوير مهارات المناظرة.' },
        { title: 'المجلة', desc: 'كتابة المقالات، إدارة مجلة النادي، وإبراز الإنتاجات الفكرية.' }
    ]
};
const sectionLabels = {
    fr: ['Débat Français', 'Débat Anglais', 'Débat Arabe'],
    en: ['French Debate', 'English Debate', 'Arabic Debate'],
    ar: ['المناظرة الفرنسية', 'المناظرة الإنجليزية', 'المناظرة العربية']
};
const cellsSectionsTitles = {
    fr: { cells: 'Nos Cellules', sections: 'Nos Sections', sectionsDesc: "Le club Great Debaters EHTP est structuré en plusieurs sections thématiques, chacune jouant un rôle clé dans la vie du club et permettant à chaque membre de s'investir selon ses centres d'intérêt." },
    en: { cells: 'Our Cells', sections: 'Our Sections', sectionsDesc: "The Great Debaters EHTP club is structured into several thematic sections, each playing a key role in club life and allowing every member to get involved according to their interests." },
    ar: { cells: 'خلايا النادي', sections: 'الأقسام', sectionsDesc: "يضم نادي المناظرات الكبرى عدة أقسام موضوعية، لكل منها دور رئيسي في حياة النادي وتتيح لكل عضو المشاركة حسب اهتماماته." }
};

// === FONCTION DE CHANGEMENT DE LANGUE UNIFIÉE ===
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const langLabel = document.querySelector('.lang-label');
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';
    translateNavItems(lang);
    translateMainContent(lang);
    translateFooter(lang);
    console.log('[Lang] Changement de langue:', lang);
}

function translateNavItems(lang) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const section = item.getAttribute('data-section');
        if (translations[lang] && translations[lang][section]) {
            item.textContent = translations[lang][section];
        }
    });
}

function translateMainContent(lang) {
    // Ajoutez ici la logique de traduction du contenu principal si besoin
}

function translateFooter(lang) {
    // Ajoutez ici la logique de traduction du footer si besoin
}

// === OPTIMISATION DE LA TRADUCTION DES CELLULES ET SECTIONS ===
function translateCellsAndSections(lang) {
    const translations = cellsSectionsTitles[lang] || cellsSectionsTitles.fr;
    // Titres
    document.querySelectorAll('.club-cells-title, .club-sections-title').forEach(el => {
        if (el.classList.contains('club-cells-title')) el.textContent = translations.cells;
        else el.textContent = translations.sections;
    });
    // Description
    const desc = document.querySelector('.club-sections-desc');
    if (desc) desc.textContent = translations.sectionsDesc;
    // Cellules
    const cells = document.querySelectorAll('.cell-card');
    cellTranslations[lang]?.forEach((cell, i) => {
        if (cells[i]) {
            const title = cells[i].querySelector('.cell-title');
            const desc = cells[i].querySelector('.cell-desc');
            if (title) title.textContent = cell.title;
            if (desc) desc.textContent = cell.desc;
        }
    });
    // Sections
    const sections = document.querySelectorAll('.section-label');
    sectionLabels[lang]?.forEach((label, i) => {
        if (sections[i]) sections[i].textContent = label;
    });
}

const originalLoadDefinitionSection = loadDefinitionSection;
loadDefinitionSection = function() {
                    const mainContent = document.getElementById('main-content');
    const template = document.getElementById('definition-template');
    if (!template) return;
    mainContent.innerHTML = '';
    mainContent.appendChild(template.content.cloneNode(true));
    setTimeout(() => {
        createMembersChart();
        createSectionsChart();
    }, 100);
    translateDefinitionContent(currentLang);
    translateCellsAndSections(currentLang);
};
const originalRenderContactSection = renderContactSection;
renderContactSection = function(lang) {
                    const mainContent = document.getElementById('main-content');
    const template = document.getElementById('contact-template');
    if (!template) return;
    mainContent.innerHTML = '';
    mainContent.appendChild(template.content.cloneNode(true));
    translateContent(lang);
    translateCellsAndSections(lang);
};

// Fonction pour traduire le contenu
function translateContent(lang) {
    const translations = {
        fr: {
            'accueil': 'Accueil',
            'a-propos': 'À propos',
            'palmares': 'Palmarès',
            'bureau': 'Bureau',
            'revue': 'Revue',
            'contact': 'Contact',
            'carousel-title': 'Great Debaters EHTP',
            'carousel-quote': '« Le débat n\'est pas un champ de bataille, mais un atelier d\'idées où se forge la compréhension mutuelle »',
            'contact-title': 'Contactez-nous',
            'contact-subtitle': 'Nous sommes là pour répondre à toutes vos questions et collaborations',
            'address': 'Adresse',
            'address-text': 'École Hassania des Travaux Publics<br>Route d\'El Jadida, Km 7<br>Casablanca, Maroc',
            'email': 'Email',
            'phone': 'Téléphone',
            'follow-us': 'Suivez-nous',
            'location': 'Notre localisation',
            'name': 'Nom',
            'firstname': 'Prénom',
            'telephone': 'Téléphone',
            'message': 'Message',
            'send-message': 'Envoyer le message',
            'name-placeholder': 'Votre nom',
            'firstname-placeholder': 'Votre prénom',
            'telephone-placeholder': 'Votre téléphone',
            'email-placeholder': 'Votre email',
            'message-placeholder': 'Votre message',
            'executive-bureau': 'Bureau Exécutif',
            'president': 'Président',
            'vice-president': 'Vice-Président',
            'secretary-general': 'Secrétaire Général',
            'explore': 'Explorer',
            'anniversaryTitle': '🎉 Anniversaire du club',
            'anniversaryText': 'Le club a été fondé le <b>23 octobre 2020</b> <span style="font-size:1.2em">🎂</span>'
        },
        ar: {
            'accueil': 'الرئيسية',
            'a-propos': 'حول',
            'palmares': 'الإنجازات',
            'bureau': 'المكتب',
            'revue': 'المجلة',
            'contact': 'اتصل بنا',
            'carousel-title': 'Great Debaters EHTP',
            'carousel-quote': '« النقاش ليس ساحة معركة، بل ورشة أفكار حيث تُشكّل الفهم المتبادل »',
            'contact-title': 'اتصل بنا',
            'contact-subtitle': 'نحن هنا للإجابة على جميع أسئلتكم وتعاونكم',
            'address': 'العنوان',
            'address-text': 'المدرسة الحسنية للأشغال العمومية<br>طريق الجديدة، كم 7<br>الدار البيضاء، المغرب',
            'email': 'البريد الإلكتروني',
            'phone': 'الهاتف',
            'follow-us': 'تابعونا',
            'location': 'موقعنا',
            'name': 'الاسم',
            'firstname': 'الاسم الأول',
            'telephone': 'الهاتف',
            'message': 'الرسالة',
            'send-message': 'إرسال الرسالة',
            'name-placeholder': 'اسمك',
            'firstname-placeholder': 'اسمك الأول',
            'telephone-placeholder': 'هاتفك',
            'email-placeholder': 'بريدك الإلكتروني',
            'message-placeholder': 'رسالتك',
            'executive-bureau': 'المكتب التنفيذي',
            'president': 'الرئيس',
            'vice-president': 'نائب الرئيس',
            'secretary-general': 'الأمين العام',
            'explore': 'استكشف',
            'anniversaryTitle': '🎉 ذكرى تأسيس النادي',
            'anniversaryText': 'تأسس النادي في <b>23 أكتوبر 2020</b> <span style="font-size:1.2em">🎂</span>'
        },
        en: {
            'accueil': 'Home',
            'a-propos': 'About',
            'palmares': 'Achievements',
            'bureau': 'Board',
            'revue': 'Magazine',
            'contact': 'Contact',
            'carousel-title': 'Great Debaters EHTP',
            'carousel-quote': '"Debate is not a battlefield, but a workshop of ideas where mutual understanding is forged"',
            'contact-title': 'Contact Us',
            'contact-subtitle': 'We are here to answer all your questions and collaborations',
            'address': 'Address',
            'address-text': 'École Hassania des Travaux Publics<br>Route d\'El Jadida, Km 7<br>Casablanca, Morocco',
            'email': 'Email',
            'phone': 'Phone',
            'follow-us': 'Follow Us',
            'location': 'Our Location',
            'name': 'Name',
            'firstname': 'First Name',
            'telephone': 'Phone',
            'message': 'Message',
            'send-message': 'Send Message',
            'name-placeholder': 'Your name',
            'firstname-placeholder': 'Your first name',
            'telephone-placeholder': 'Your phone',
            'email-placeholder': 'Your email',
            'message-placeholder': 'Your message',
            'executive-bureau': 'Executive Board',
            'president': 'President',
            'anniversaryTitle': '🎉 Club Anniversary',
            'anniversaryText': 'The club was founded on <b>October 23, 2020</b> <span style="font-size:1.2em">🎂</span>',
            'vice-president': 'Vice-President',
            'secretary-general': 'Secretary General',
            'explore': 'Explore'
        }
    };
    
    // Appliquer la direction du texte selon la langue
    const body = document.body;
    if (lang === 'ar') {
        body.style.direction = 'rtl';
        body.style.textAlign = 'right';
    } else {
        body.style.direction = 'ltr';
        body.style.textAlign = 'left';
    }
    
    // Traduire la navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const section = item.getAttribute('data-section');
        if (translations[lang][section]) {
            item.textContent = translations[lang][section];
        }
    });
    
    // Traduire le titre du carousel
    const carouselTitle = document.querySelector('.carousel-title');
    if (carouselTitle) {
        carouselTitle.textContent = translations[lang]['carousel-title'];
    }
    
    // Traduire la citation du carousel
    const carouselQuote = document.querySelector('.carousel-quote');
    if (carouselQuote) {
        carouselQuote.innerHTML = translations[lang]['carousel-quote'];
    }
    
    // Traduire le bouton Explore
    const exploreBtn = document.querySelector('.explore-btn span');
    if (exploreBtn) {
        exploreBtn.textContent = translations[lang]['explore'];
    }
    
    // Traduire le contenu de la section contact si elle est active
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        const contactTitle = contactSection.querySelector('.contact-header h2');
        if (contactTitle) {
            contactTitle.textContent = translations[lang]['contact-title'];
        }
        
        const contactSubtitle = contactSection.querySelector('.contact-header p');
        if (contactSubtitle) {
            contactSubtitle.textContent = translations[lang]['contact-subtitle'];
        }
        
        // Traduire les cartes de contact
        const contactCards = contactSection.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const content = card.querySelector('p');
            
            if (index === 0 && title) title.textContent = translations[lang]['address'];
            if (index === 0 && content) content.innerHTML = translations[lang]['address-text'];
            if (index === 1 && title) title.textContent = translations[lang]['email'];
            if (index === 2 && title) title.textContent = translations[lang]['phone'];
        });
        
        // Traduire les réseaux sociaux
        const socialTitle = contactSection.querySelector('.social-media h3');
        if (socialTitle) {
            socialTitle.textContent = translations[lang]['follow-us'];
        }
        
        // Traduire la carte
        const mapTitle = contactSection.querySelector('.map-container h3');
        if (mapTitle) {
            mapTitle.textContent = translations[lang]['location'];
        }
        
        // Traduire le formulaire
        const formLabels = contactSection.querySelectorAll('.form-group label');
        const formInputs = contactSection.querySelectorAll('.form-group input, .form-group textarea');
        
        formLabels.forEach((label, index) => {
            if (index === 0) label.textContent = translations[lang]['name'];
            if (index === 1) label.textContent = translations[lang]['firstname'];
            if (index === 2) label.textContent = translations[lang]['telephone'];
            if (index === 3) label.textContent = translations[lang]['email'];
            if (index === 4) label.textContent = translations[lang]['message'];
        });
        
        formInputs.forEach((input, index) => {
            if (index === 0) input.placeholder = translations[lang]['name-placeholder'];
            if (index === 1) input.placeholder = translations[lang]['firstname-placeholder'];
            if (index === 2) input.placeholder = translations[lang]['telephone-placeholder'];
            if (index === 3) input.placeholder = translations[lang]['email-placeholder'];
            if (index === 4) input.placeholder = translations[lang]['message-placeholder'];
        });
        
        // Traduire le bouton d'envoi
        const submitBtn = contactSection.querySelector('.submit-btn span');
        if (submitBtn) {
            submitBtn.textContent = translations[lang]['send-message'];
        }
        
        // Traduire la section bureau exécutif
        const bureauTitle = contactSection.querySelector('.executive-bureau h3');
        if (bureauTitle) {
            bureauTitle.textContent = translations[lang]['executive-bureau'];
        }
        
        const bureauMembers = contactSection.querySelectorAll('.bureau-member');
        bureauMembers.forEach((member, index) => {
            const memberTitle = member.querySelector('h4');
            if (index === 0 && memberTitle) memberTitle.textContent = translations[lang]['president'];
            if (index === 1 && memberTitle) memberTitle.textContent = translations[lang]['vice-president'];
            if (index === 2 && memberTitle) memberTitle.textContent = translations[lang]['secretary-general'];
        });
        
        // Appliquer la direction RTL/LTR à la section contact
        if (lang === 'ar') {
            contactSection.style.direction = 'rtl';
            contactSection.style.textAlign = 'right';
            
            // Appliquer RTL à tous les éléments de la section contact
            const contactElements = contactSection.querySelectorAll('*');
            contactElements.forEach(element => {
                element.style.direction = 'rtl';
                element.style.textAlign = 'right';
            });
        } else {
            contactSection.style.direction = 'ltr';
            contactSection.style.textAlign = 'left';
            
            // Appliquer LTR à tous les éléments de la section contact
            const contactElements = contactSection.querySelectorAll('*');
            contactElements.forEach(element => {
                element.style.direction = 'ltr';
                element.style.textAlign = 'left';
            });
        }
    }
    
    // Le footer reste toujours en français et LTR, sauf le copyright et liens légaux
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.direction = 'ltr';
        footer.style.textAlign = 'left';
        
        // Traduire seulement le copyright et les liens légaux
        const copyright = footer.querySelector('.copyright');
        const legalLinks = footer.querySelectorAll('.legal-link');
        
        // Traduire aussi les titres des sections du footer
        const footerTitles = footer.querySelectorAll('.footer-section h4');
        
        const footerTranslations = {
            fr: {
                'copyright': '© 2024 Great Debaters EHTP. Tous droits réservés.',
                'privacy': 'Politique de confidentialité',
                'terms': 'Conditions d\'utilisation',
                'legal': 'Mentions légales',
                'quick-links': 'Liens Rapides',
                'contact': 'Contact',
                'follow-us': 'Suivez-nous'
            },
            ar: {
                'copyright': '© 2024 Great Debaters EHTP. جميع الحقوق محفوظة.',
                'privacy': 'سياسة الخصوصية',
                'terms': 'شروط الاستخدام',
                'legal': 'الإشعارات القانونية',
                'quick-links': 'روابط سريعة',
                'contact': 'اتصل بنا',
                'follow-us': 'تابعونا'
            },
            en: {
                'copyright': '© 2024 Great Debaters EHTP. All rights reserved.',
                'privacy': 'Privacy Policy',
                'terms': 'Terms of Use',
                'legal': 'Legal Notices',
                'quick-links': 'Quick Links',
                'contact': 'Contact',
                'follow-us': 'Follow Us'
            }
        };
        
        if (copyright) {
            copyright.textContent = footerTranslations[lang]['copyright'];
        }
        
        legalLinks.forEach((link, index) => {
            if (index === 0) link.textContent = footerTranslations[lang]['privacy'];
            if (index === 1) link.textContent = footerTranslations[lang]['terms'];
            if (index === 2) link.textContent = footerTranslations[lang]['legal'];
        });
        
        // Traduire les titres des sections du footer
        footerTitles.forEach((title, index) => {
            if (index === 1) title.textContent = footerTranslations[lang]['quick-links'];
            if (index === 2) title.textContent = footerTranslations[lang]['contact'];
            if (index === 3) title.textContent = footerTranslations[lang]['follow-us'];
        });
        
        // S'assurer que tous les autres éléments du footer restent en français
        const footerElements = footer.querySelectorAll('*');
        footerElements.forEach(element => {
            if (!element.classList.contains('copyright') && !element.classList.contains('legal-link')) {
                element.style.direction = 'ltr';
                element.style.textAlign = 'left';
            }
        });
    }
}

// Fonction pour rendre la section Contact
function renderContactSection(lang) {
    const mainContent = document.getElementById('main-content');
    const template = document.getElementById('contact-template');
    if (!template) return;
    
    mainContent.innerHTML = '';
    mainContent.appendChild(template.content.cloneNode(true));
    
    // Traduction dynamique des labels et textes
    const translations = {
        fr: {
            h2: 'Contactez-nous',
            p: 'Nous sommes là pour répondre à toutes vos questions et collaborations',
            adresse: 'Adresse',
            email: 'Email',
            telephone: 'Téléphone',
            nom: 'Nom',
            prenom: 'Prénom',
            message: 'Message',
            envoyer: 'Envoyer le message',
            localisation: 'Notre localisation',
            feedback: 'Merci pour votre message ! Nous vous répondrons rapidement.',
            error: 'Veuillez remplir tous les champs correctement.'
        },
        en: {
            h2: 'Contact Us',
            p: 'We are here to answer all your questions and collaborations',
            adresse: 'Address',
            email: 'Email',
            telephone: 'Phone',
            nom: 'Name',
            prenom: 'First Name',
            message: 'Message',
            envoyer: 'Send Message',
            localisation: 'Our Location',
            feedback: 'Thank you for your message! We will get back to you soon.',
            error: 'Please fill all fields correctly.'
        },
        ar: {
            h2: 'اتصلوا بنا',
            p: 'نحن هنا للإجابة على جميع أسئلتكم والتعاون معكم',
            adresse: 'العنوان',
            email: 'البريد الإلكتروني',
            telephone: 'الهاتف',
            nom: 'الاسم',
            prenom: 'الاسم الأول',
            message: 'الرسالة',
            envoyer: 'إرسال الرسالة',
            localisation: 'موقعنا',
            feedback: 'شكرًا لرسالتكم! سنرد عليكم قريبًا.',
            error: 'يرجى ملء جميع الحقول بشكل صحيح.'
        }
    };
    
    const t = translations[lang] || translations.fr;
    
    // Appliquer les traductions
    const header = document.querySelector('.contact-header');
    if (header) {
        header.querySelector('h2').textContent = t.h2;
        header.querySelector('p').textContent = t.p;
    }
    
    const details = document.querySelectorAll('.contact-details h3');
    if (details.length >= 3) {
        details[0].textContent = t.adresse;
        details[1].textContent = t.email;
        details[2].textContent = t.telephone;
    }
    
    const labels = document.querySelectorAll('label');
    if (labels.length >= 5) {
        labels[0].textContent = t.nom;
        labels[1].textContent = t.prenom;
        labels[2].textContent = t.telephone;
        labels[3].textContent = t.email;
        labels[4].textContent = t.message;
    }
    
    const submitBtn = document.querySelector('.submit-btn span');
    if (submitBtn) submitBtn.textContent = t.envoyer;
    
    const mapTitle = document.querySelector('.map-container h3');
    if (mapTitle) mapTitle.textContent = t.localisation;
    
    // Validation et feedback du formulaire
    const form = document.querySelector('.contact-form');
    const feedback = document.querySelector('.form-feedback');
    
    if (form && feedback) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (form.checkValidity()) {
                feedback.textContent = t.feedback;
                feedback.style.display = 'block';
                feedback.style.color = '#27ae60';
                feedback.style.background = '#d5f4e6';
                feedback.style.padding = '12px';
                feedback.style.borderRadius = '8px';
                feedback.style.marginTop = '16px';
                form.reset();
                setTimeout(() => { 
                    feedback.style.display = 'none'; 
                }, 4000);
            } else {
                feedback.textContent = t.error;
                feedback.style.display = 'block';
                feedback.style.color = '#c0392b';
                feedback.style.background = '#fadbd8';
                feedback.style.padding = '12px';
                feedback.style.borderRadius = '8px';
                feedback.style.marginTop = '16px';
            }
        });
    }
}

function updateMainContent() {
    if (mainContent) {
        if(currentSection === 'accueil') {
            mainContent.innerHTML = carouselHTML[currentLang];
            initCarousel();
        } else if(currentSection === 'contact') {
            renderContactSection(currentLang);
        } else if (sectionContents[currentLang][currentSection]) {
            mainContent.innerHTML = sectionContents[currentLang][currentSection];
        }
    }
}
// Navigation depuis la navbar
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        
        // Mettre à jour la navigation active
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
        
        // Charger le contenu de la section
        if (section === 'accueil') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section id="carousel-section" class="carousel-section">
                    <div class="carousel-container">
                        <div class="carousel">
                            <div class="carousel-slide active">
                                <img src="Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg" alt="Photo 1">
                            </div>
                            <div class="carousel-slide">
                                <img src="Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg" alt="Photo 2">
                            </div>
                            <div class="carousel-slide">
                                <img src="_52A5289.jpg" alt="Photo 3">
                            </div>
                            <div class="carousel-slide">
                                <img src="_52A5326.jpg" alt="Photo 4">
                            </div>
                            <div class="carousel-slide">
                                <img src="Capture d'écran 2025-07-19 034957.png" alt="Photo 5">
                            </div>
                            <div class="carousel-slide">
                                <img src="3 brrothers.jpg" alt="Photo 6">
                            </div>
                        </div>
                        <button class="carousel-btn prev" aria-label="Précédent">&#10094;</button>
                        <button class="carousel-btn next" aria-label="Suivant">&#10095;</button>
                    </div>
                    <h1 class="carousel-title">Great Debaters EHTP</h1>
                    <div class="quote-container">
                        <div class="quote-decoration left-decoration">
                            <i class="fas fa-feather-alt"></i>
                        </div>
                        <blockquote class="carousel-quote">« Le débat n'est pas un champ de bataille, mais un atelier d'idées où se forge la compréhension mutuelle »</blockquote>
                        <div class="quote-decoration right-decoration">
                            <i class="fas fa-bolt"></i>
                        </div>
                    </div>
                    
                    <div class="explore-btn-wrapper">
                        <button class="explore-btn">
                            <span>Explorer</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </section>
            `;
            initCarousel();
            translateContent(currentLang);
        } else if (section === 'contact') {
            renderContactSection(currentLang);
        } else if (section === 'palmares') {
            const mainContent = document.getElementById('main-content');
            
            // Générer le bloc anniversaire selon la langue
            const annivHTML = `
                <div class="club-anniversary-box" onclick="triggerFireworks()">
                    <div class="anniv-title">${translations[currentLang].anniversaryTitle}</div>
                    <div class="anniv-text">${translations[currentLang].anniversaryText}</div>
                </div>
            `;
            
            mainContent.innerHTML = annivHTML + `
                <section class="history-section">
                    <div class="history-header">
                        <h2>${translations[currentLang].historyTitle}</h2>
                        <p>${translations[currentLang].historySubtitle}</p>
                    </div>
                    <div class="history-content">
                        <div class="history-card founder">
                            <div class="history-icon">
                                <i class="fas fa-crown"></i>
                            </div>
                            <div class="history-info">
                                <h3>${translations[currentLang].founder}</h3>
                                <p class="history-name">Hamza Senhajir</p>
                            </div>
                        </div>
                        <div class="history-card milestone">
                            <div class="history-icon">
                                <i class="fas fa-flag"></i>
                            </div>
                            <div class="history-info">
                                <h3>${translations[currentLang].firstMilestone}</h3>
                                <p class="history-name">Marouane Mouhout</p>
                            </div>
                        </div>
                        <div class="history-card cofounders">
                            <div class="history-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="history-info">
                                <h3>${translations[currentLang].coFounders}</h3>
                                <p class="history-name">Zakaria Tajmoute</p>
                                <p class="history-name">Youness Bellafkih</p>
                                <p class="history-name">Meriam Guaybess</p>
                            </div>
                        </div>
                        <div class="history-card logo">
                            <div class="history-icon">
                                <i class="fas fa-palette"></i>
                            </div>
                            <div class="history-info">
                                <h3>${translations[currentLang].logoCreator}</h3>
                                <p class="history-name">Yassine Echeblaoui</p>
                            </div>
                        </div>
                        <div class="history-card vee">
                            <div class="history-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <div class="history-info">
                                <h3>${translations[currentLang].firstVEEOrganizer}</h3>
                                <p class="history-name">Hiba Hafid</p>
                            </div>
                        </div>
                        <div class="history-card developer">
                            <div class="history-icon">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="history-info">
                                <h3>${translations[currentLang].siteDeveloper}</h3>
                                <p class="history-name">Nadahe Mohammed</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="competitions-section">
                    <div class="competitions-header">
                        <h2>${translations[currentLang].competitionsTitle}</h2>
                        <p>${translations[currentLang].competitionsSubtitle}</p>
                    </div>
                    <div class="competitions-content">
                        <div class="competition-card">
                            <div class="competition-trophy">
                                <img src="Trophees/1.png" alt="Trophée Agora" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].agoraTitle}</h3>
                                <p class="competition-description">${translations[currentLang].agoraDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].agoraTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].agoraSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].winningTeam}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="equipe/Design sans titre.png" alt="Équipe gagnante" class="team-image">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].teamMembers}</h5>
                                            <ul class="members-list">
                                                <li>Chaymae Haida</li>
                                                <li>Bekkali Mohammed El Habib</li>
                                                <li>Mohamed Amine El Aagouby</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card vee-competition">
                            <div class="competition-trophy">
                                <img src="Trophees/2.png" alt="Trophée VEE" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].veeTitle}</h3>
                                <p class="competition-description">${translations[currentLang].veeDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].veeTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].veeSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].winningTeam}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="equipe/Vee equipe.png" alt="Équipe VEE gagnante" class="team-image">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].teamMembers}</h5>
                                            <ul class="members-list">
                                                <li>Jamila El Harrouch</li>
                                                <li>Bekkali Mohammed El Habib</li>
                                                <li>Mohamed El-Afi</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card grand-debat-competition">
                            <div class="competition-trophy">
                                <img src="Trophees/5.png" alt="Trophée Grand Débat" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].grandDebatTitle}</h3>
                                <p class="competition-description">${translations[currentLang].grandDebatDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].grandDebatSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].winningTeam}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="equipe/Le grand debat.png" alt="Équipe Grand Débat gagnante" class="team-image">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].teamMembers}</h5>
                                            <ul class="members-list">
                                                <li>زينب البغوري</li>
                                                <li>محمد الشاتي</li>
                                                <li>امباركة افنيدو</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card victoria-verba-competition">
                            <div class="competition-trophy">
                                <img src="Trophees/6.png" alt="Trophée Victoria Verba" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].victoriaVerbaTitle}</h3>
                                <p class="competition-description">${translations[currentLang].victoriaVerbaDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].victoriaVerbaTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].victoriaVerbaSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].winningTeam}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="equipe/Victoria1.png" alt="Équipe Victoria Verba gagnante" class="team-image">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].teamMembers}</h5>
                                            <ul class="members-list">
                                                <li>Mohamed El-Afi</li>
                                                <li>Meryeme Dhaher</li>
                                                <li>Hind Amzil</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card invictus-competition">
                            <div class="competition-trophy">
                                <img src="Trophees/7.png" alt="Trophée Invictus" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].invictusTitle}</h3>
                                <p class="competition-description">${translations[currentLang].invictusDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].invictusTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].invictusSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].winningTeam}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="equipe/Invictus.png" alt="Équipe Invictus gagnante" class="team-image">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].teamMembers}</h5>
                                            <ul class="members-list">
                                                <li>Mohamed El-Afi</li>
                                                <li>Imane Aghad</li>
                                                <li>Meryeme Dhaher</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card allstar-competition">
                            <div class="competition-info">
                                <h3>${translations[currentLang].allStarTitle}</h3>
                                <p class="competition-description">${translations[currentLang].allStarDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].allStarTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].allStarSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].participants}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="habib-afi.jpg" alt="Participants All Star Debate" class="team-image" style="object-fit: cover; object-position: center; width: 100%; height: 200px;">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].participants}</h5>
                                            <ul class="members-list">
                                                <li>Mohamed El-Afi</li>
                                                <li>Bekkali Mohammed El Habib</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card allstar-champion-competition">
                            <div class="competition-trophy">
                                <img src="all str.jpg" alt="Trophée All Star Debate Champion" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].allStarChampionTitle}</h3>
                                <p class="competition-description">${translations[currentLang].allStarChampionDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].allStarChampionTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].allStarChampionSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].champion}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="champion de all star debate.jpg" alt="Champion All Star Debate" class="team-image" style="object-fit: cover; object-position: center; width: 100%; height: 200px;">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].champion}</h5>
                                            <ul class="members-list">
                                                <li>Mohamed El-Afi</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="competition-card allstar-national-champion-competition">
                            <div class="competition-trophy">
                                <img src="all str.jpg" alt="Trophée Champion National All Star Debate" class="trophy-image">
                                <div class="trophy-glow"></div>
                            </div>
                            <div class="competition-info">
                                <h3>${translations[currentLang].allStarNationalChampionTitle}</h3>
                                <p class="competition-description">${translations[currentLang].allStarNationalChampionDescription}</p>
                                
                                <div class="competition-details">
                                    <div class="theme-section">
                                        <h4>🎯 Thème de la compétition</h4>
                                        <p class="theme-text">${translations[currentLang].allStarNationalChampionTheme}</p>
                                    </div>
                                    
                                    <div class="section-info">
                                        <h4>📚 Section</h4>
                                        <p class="section-text">${translations[currentLang].allStarNationalChampionSection}</p>
                                    </div>
                                </div>
                                
                                <div class="winning-team">
                                    <h4>${translations[currentLang].champion}</h4>
                                    <div class="team-content">
                                        <div class="team-photo">
                                            <img src="equipe/IMG_4718.JPG" alt="Mohamed El Afi - Champion National All Star Debate" class="team-image" style="object-fit: cover; object-position: center; width: 100%; height: 200px;">
                                        </div>
                                        <div class="team-members">
                                            <h5>${translations[currentLang].champion}</h5>
                                            <ul class="members-list">
                                                <li>Mohamed El Afi</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="palmares-section">
                    <div class="palmares-header">
                        <h2>Palmarès</h2>
                        <p>Découvrez nos réalisations et nos trophées</p>
                    </div>
                    <div class="palmares-content">
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <h3>Championnat National 2023</h3>
                            <p>Première place au championnat national de débat</p>
                        </div>
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h3>Excellence Académique</h3>
                            <p>Reconnaissance pour l'excellence académique</p>
                        </div>
                    </div>
                </section>
            `;
        } else if (section === 'bureau') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section class="bureau-section">
                    <div class="bureau-header">
                        <h2>Bureau</h2>
                        <p>Rencontrez notre équipe dirigeante</p>
                    </div>
                    <div class="bureau-content">
                        <div class="bureau-member-card">
                            <div class="member-avatar">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <h3>Président</h3>
                            <p class="member-name">NADAHE Mohammed</p>
                        </div>
                        <div class="bureau-member-card">
                            <div class="member-avatar">
                                <i class="fas fa-user-graduate"></i>
                            </div>
                            <h3>Vice-Président</h3>
                            <p class="member-name">EL KHADIRI Douae</p>
                        </div>
                        <div class="bureau-member-card">
                            <div class="member-avatar">
                                <i class="fas fa-user-edit"></i>
                            </div>
                            <h3>Secrétaire Général</h3>
                            <p class="member-name">Ahmed Fouad Goughelt</p>
                        </div>
                    </div>
                </section>
            `;
        } else if (section === 'revue') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section class="revue-section">
                    <div class="revue-header">
                        <h2>Revue</h2>
                        <p>Nos publications et articles</p>
                    </div>
                    <div class="revue-content">
                        <div class="article-card">
                            <h3>L'Art du Débat</h3>
                            <p>Guide complet sur les techniques de débat</p>
                        </div>
                        <div class="article-card">
                            <h3>Éloquence et Persuasion</h3>
                            <p>Les secrets de l'art oratoire</p>
                        </div>
                        <div class="article-card">
                            <h3>Actualités du Club</h3>
                            <p>Les dernières nouvelles de Great Debaters</p>
                        </div>
                    </div>
                </section>
            `;
        }
        
        // Scroll vers le haut de la page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Fonction pour charger la section définition du club
function loadDefinitionSection() {
    const mainContent = document.getElementById('main-content');
    const template = document.getElementById('definition-template');
    if (!template) return;
    
    mainContent.innerHTML = '';
    mainContent.appendChild(template.content.cloneNode(true));
    
    // Créer le graphique après le chargement du contenu
    setTimeout(() => {
        createMembersChart();
    createSectionsChart();
    }, 100);
    
    // Traduire le contenu selon la langue actuelle
    translateDefinitionContent(currentLang);
}

// Fonction pour traduire le contenu de la section définition
function translateDefinitionContent(lang) {
    const translations = {
        fr: {
            title: 'Great Debaters EHTP',
            subtitle: 'L\'Excellence du Débat à l\'École Hassania des Travaux Publics',
            mission: 'Notre Mission',
            missionText: 'Former les leaders de demain à travers l\'art de la persuasion, de l\'éloquence et du débat constructif. Nous développons les compétences oratoires, la pensée critique et l\'esprit d\'équipe de nos membres.',
            vision: 'Notre Vision',
            visionText: 'Devenir la référence nationale en matière de débat académique et de formation en leadership, en créant une communauté d\'orateurs éloquents et de penseurs critiques qui contribuent au développement de la société.',
            values: 'Nos Valeurs',
            excellence: 'Excellence :',
            excellenceText: 'Recherche constante de la perfection dans nos performances',
            respect: 'Respect :',
            respectText: 'Écoute active et considération des opinions d\'autrui',
            innovation: 'Innovation :',
            innovationText: 'Créativité dans nos approches et méthodes',
            solidarity: 'Solidarité :',
            solidarityText: 'Esprit d\'équipe et soutien mutuel',
            integrity: 'Intégrité :',
            integrityText: 'Honnêteté et éthique dans nos débats',
            stats: 'Nos Chiffres Clés',
            years: 'Années d\'Excellence',
            yearsDesc: 'Depuis notre création en 2019',
            members: 'Membres Actifs',
            membersDesc: 'Étudiants formés chaque année',
            trophies: 'Trophées Gagnés',
            trophiesDesc: 'Compétitions nationales',
            chart: 'Évolution du Nombre de Membres',
            chartDesc: 'Cette courbe montre l\'évolution du nombre de nouveaux membres qui rejoignent le club Great Debaters EHTP chaque année, démontrant notre croissance constante et notre attractivité croissante auprès des étudiants.',
            activities: 'Nos Activités',
            debates: 'Débats Réguliers',
            debatesText: 'Sessions hebdomadaires de débat sur des sujets d\'actualité, politiques, économiques et sociaux.',
            competitions: 'Compétitions',
            competitionsText: 'Participation aux compétitions nationales de débat avec un palmarès exceptionnel.',
            training: 'Formation',
            trainingText: 'Ateliers de formation en techniques de débat, éloquence et art oratoire pour tous les niveaux.',
            events: 'Événements',
            eventsText: 'Organisation de conférences, tables rondes et événements culturels ouverts à la communauté.',
            joinUs: 'Rejoignez-nous',
            whyJoin: 'Pourquoi nous rejoindre ?',
            benefits: [
                'Développement de compétences oratoires exceptionnelles',
                'Participation à des compétitions nationales et internationales',
                'Formation continue en techniques de débat',
                'Réseau de professionnels et d\'anciens membres',
                'Opportunités de leadership et de prise de responsabilités',
                'Certificats et reconnaissances académiques'
            ],
            howToJoin: 'Comment nous rejoindre ?',
            joinText: 'Les inscriptions sont ouvertes à tous les étudiants de l\'EHTP. Contactez-nous pour plus d\'informations sur nos sessions d\'essai et nos programmes de formation.',
            contactUs: 'Nous Contacter'
        },
        en: {
            title: 'Great Debaters EHTP',
            subtitle: 'Debate Excellence at the Hassania School of Public Works',
            mission: 'Our Mission',
            missionText: 'To train tomorrow\'s leaders through the art of persuasion, eloquence, and constructive debate. We develop oratory skills, critical thinking, and team spirit in our members.',
            vision: 'Our Vision',
            visionText: 'To become the national reference in academic debate and leadership training, creating a community of eloquent speakers and critical thinkers who contribute to society\'s development.',
            values: 'Our Values',
            excellence: 'Excellence:',
            excellenceText: 'Constant pursuit of perfection in our performances',
            respect: 'Respect:',
            respectText: 'Active listening and consideration of others\' opinions',
            innovation: 'Innovation:',
            innovationText: 'Creativity in our approaches and methods',
            solidarity: 'Solidarity:',
            solidarityText: 'Team spirit and mutual support',
            integrity: 'Integrity:',
            integrityText: 'Honesty and ethics in our debates',
            stats: 'Our Key Figures',
            years: 'Years of Excellence',
            yearsDesc: 'Since our creation in 2019',
            members: 'Active Members',
            membersDesc: 'Students trained each year',
            trophies: 'Won Trophies',
            trophiesDesc: 'National and international tournaments',
            chart: 'Members Evolution',
            chartDesc: 'This curve shows the evolution of the number of new members joining the Great Debaters EHTP club each year, demonstrating our constant growth and increasing attractiveness to students.',
            activities: 'Our Activities',
            debates: 'Regular Debates',
            debatesText: 'Weekly debate sessions on current political, economic, and social topics.',
            competitions: 'Competitions',
            competitionsText: 'Participation in national and international debate tournaments with an exceptional track record.',
            training: 'Training',
            trainingText: 'Workshops in debate techniques, eloquence, and public speaking for all levels.',
            events: 'Events',
            eventsText: 'Organization of conferences, round tables, and cultural events open to the community.',
            joinUs: 'Join Us',
            whyJoin: 'Why join us?',
            benefits: [
                'Development of exceptional oratory skills',
                'Participation in national and international competitions',
                'Continuous training in debate techniques',
                'Network of professionals and alumni',
                'Leadership opportunities and responsibility-taking',
                'Certificates and academic recognition'
            ],
            howToJoin: 'How to join us?',
            joinText: 'Registrations are open to all EHTP students. Contact us for more information about our trial sessions and training programs.',
            contactUs: 'Contact Us'
        },
        ar: {
            title: 'Great Debaters EHTP',
            subtitle: 'التميز في المناظرة في المدرسة الحسنية للأشغال العمومية',
            mission: 'مهمتنا',
            missionText: 'تدريب قادة الغد من خلال فن الإقناع والبلاغة والمناظرة البناءة. نطور المهارات الخطابية والتفكير النقدي وروح الفريق لدى أعضائنا.',
            vision: 'رؤيتنا',
            visionText: 'أن نصبح المرجع الوطني في المناظرة الأكاديمية وتدريب القيادة، من خلال إنشاء مجتمع من المتحدثين البليغين والمفكرين النقديين الذين يساهمون في تطوير المجتمع.',
            values: 'قيمنا',
            excellence: 'التميز:',
            excellenceText: 'السعي المستمر للكمال في أدائنا',
            respect: 'الاحترام:',
            respectText: 'الاستماع النشط والاعتبار لآراء الآخرين',
            innovation: 'الابتكار:',
            innovationText: 'الإبداع في نهجنا وطرقنا',
            solidarity: 'التضامن:',
            solidarityText: 'روح الفريق والدعم المتبادل',
            integrity: 'النزاهة:',
            integrityText: 'الصدق والأخلاق في مناظراتنا',
            stats: 'أرقامنا المهمة',
            years: 'سنوات التميز',
            yearsDesc: 'منذ إنشائنا في 2019',
            members: 'أعضاء نشطون',
            membersDesc: 'طلاب مدربون كل سنة',
            trophies: 'ميداليات فازنا بها',
            trophiesDesc: 'بطولات وطنية ودولية',
            chart: 'تطور عدد الأعضاء',
            chartDesc: 'هذا المنحنى يوضح تطور عدد الأعضاء الجدد الذين ينضمون إلى نادي Great Debaters EHTP كل سنة، مما يوضح نمونا المستمر وجاذبيتنا المتزايدة للطلاب.',
            activities: 'أنشطتنا',
            debates: 'المناظرات المنتظمة',
            debatesText: 'جلسات مناظرة أسبوعية حول مواضيع سياسية واقتصادية واجتماعية راهنة.',
            competitions: 'المنافسات',
            competitionsText: 'المشاركة في بطولات المناظرة الوطنية والدولية بسجل استثنائي.',
            training: 'التدريب',
            trainingText: 'ورش عمل في تقنيات المناظرة والبلاغة وفن الخطابة لجميع المستويات.',
            events: 'الفعاليات',
            eventsText: 'تنظيم مؤتمرات وطاولات مستديرة وفعاليات ثقافية مفتوحة للمجتمع.',
            joinUs: 'انضم إلينا',
            whyJoin: 'لماذا تنضم إلينا؟',
            benefits: [
                'تطوير مهارات خطابية استثنائية',
                'المشاركة في منافسات وطنية ودولية',
                'تدريب مستمر في تقنيات المناظرة',
                'شبكة من المهنيين والخريجين',
                'فرص القيادة وتحمل المسؤولية',
                'شهادات واعتراف أكاديمي'
            ],
            howToJoin: 'كيف تنضم إلينا؟',
            joinText: 'التسجيلات مفتوحة لجميع طلاب EHTP. اتصل بنا لمزيد من المعلومات حول جلسات التجربة وبرامج التدريب.',
            contactUs: 'اتصل بنا'
        }
    };
    
    // Traductions pour les partenaires
    i18n.partners = {
        fr: {
            academicPartners: "Écoles Partenaires",
            academicPartnersDesc: "Découvrez nos partenaires académiques prestigieux",
            academicPartner: "Partenaire Académique",
            academicCollaboration: "Collaboration d'excellence",
            officialPartner: "Partenaire Officiel",
            excellence: "Excellence",
            quality: "Qualité",
            formation: "Formation",
            mediaPartners: "Partenaires Médiatiques",
            mediaPartnersDesc: "Découvrez nos partenaires médiatiques d'excellence",
            mediaPartner: "Partenaire Médiatique",
            mediaCoverage: "Couverture médiatique d'excellence",
            mediaPartnerBadge: "Partenaire Média",
            coverage: "Couverture",
            press: "Presse",
            reportage: "Reportage"
        },
        en: {
            academicPartners: "Academic Partners",
            academicPartnersDesc: "Discover our prestigious academic partners",
            academicPartner: "Academic Partner",
            academicCollaboration: "Excellence collaboration",
            officialPartner: "Official Partner",
            excellence: "Excellence",
            quality: "Quality",
            formation: "Formation",
            mediaPartners: "Media Partners",
            mediaPartnersDesc: "Discover our excellent media partners",
            mediaPartner: "Media Partner",
            mediaCoverage: "Excellent media coverage",
            mediaPartnerBadge: "Media Partner",
            coverage: "Coverage",
            press: "Press",
            reportage: "Reportage"
        },
        ar: {
            academicPartners: "الشركاء الأكاديميون",
            academicPartnersDesc: "اكتشف شركاءنا الأكاديميين المرموقين",
            academicPartner: "شريك أكاديمي",
            academicCollaboration: "تعاون متميز",
            officialPartner: "شريك رسمي",
            excellence: "التميز",
            quality: "الجودة",
            formation: "التكوين",
            mediaPartners: "الشركاء الإعلاميون",
            mediaPartnersDesc: "اكتشف شركاءنا الإعلاميين المتميزين",
            mediaPartner: "شريك إعلامي",
            mediaCoverage: "تغطية إعلامية متميزة",
            mediaPartnerBadge: "شريك إعلامي",
            coverage: "التغطية",
            press: "الصحافة",
            reportage: "التقرير"
        }
    };
    
    const t = translations[lang] || translations.fr;
    
    // Appliquer les traductions
    const title = document.querySelector('.definition-title');
    if (title) title.textContent = t.title;
    
    const subtitle = document.querySelector('.definition-subtitle');
    if (subtitle) subtitle.textContent = t.subtitle;
    
    // Traduire les cartes de définition
    const definitionCards = document.querySelectorAll('.definition-card');
    if (definitionCards.length >= 3) {
        // Mission
        const missionCard = definitionCards[0];
        missionCard.querySelector('h3').textContent = t.mission;
        missionCard.querySelector('p').textContent = t.missionText;
        
        // Vision
        const visionCard = definitionCards[1];
        visionCard.querySelector('h3').textContent = t.vision;
        visionCard.querySelector('p').textContent = t.visionText;
        
        // Valeurs
        const valuesCard = definitionCards[2];
        valuesCard.querySelector('h3').textContent = t.values;
        
        const valuesList = valuesCard.querySelector('.values-list');
        if (valuesList) {
            valuesList.innerHTML = `
                <li><strong>${t.excellence}</strong> ${t.excellenceText}</li>
                <li><strong>${t.respect}</strong> ${t.respectText}</li>
                <li><strong>${t.innovation}</strong> ${t.innovationText}</li>
                <li><strong>${t.solidarity}</strong> ${t.solidarityText}</li>
                <li><strong>${t.integrity}</strong> ${t.integrityText}</li>
            `;
        }
    }
    
    // Traduire les activités
    const activitiesTitle = document.querySelector('.activities-section h2');
    if (activitiesTitle) activitiesTitle.textContent = t.activities;
    
    const activityCards = document.querySelectorAll('.activity-card');
    if (activityCards.length >= 4) {
        activityCards[0].querySelector('h4').textContent = t.debates;
        activityCards[0].querySelector('p').textContent = t.debatesText;
        
        activityCards[1].querySelector('h4').textContent = t.competitions;
        activityCards[1].querySelector('p').textContent = t.competitionsText;
        
        activityCards[2].querySelector('h4').textContent = t.training;
        activityCards[2].querySelector('p').textContent = t.trainingText;
        
        activityCards[3].querySelector('h4').textContent = t.events;
        activityCards[3].querySelector('p').textContent = t.eventsText;
    }
    
    // Traduire la section statistiques
    const statsTitle = document.querySelector('.stats-section h2');
    if (statsTitle) statsTitle.textContent = t.stats;
    
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 3) {
        // Années d'excellence
        const yearsCard = statCards[0];
        yearsCard.querySelector('.stat-label').textContent = t.years;
        yearsCard.querySelector('.stat-description').textContent = t.yearsDesc;
        
        // Membres actifs
        const membersCard = statCards[1];
        membersCard.querySelector('.stat-label').textContent = t.members;
        membersCard.querySelector('.stat-description').textContent = t.membersDesc;
        
        // Trophées gagnés
        const trophiesCard = statCards[2];
        trophiesCard.querySelector('.stat-label').textContent = t.trophies;
        trophiesCard.querySelector('.stat-description').textContent = t.trophiesDesc;
    }
    
    // Traduire la section graphique
    const chartTitle = document.querySelector('.chart-section h2');
    if (chartTitle) chartTitle.textContent = t.chart;
    
    const chartDescription = document.querySelector('.chart-description p');
    if (chartDescription) chartDescription.textContent = t.chartDesc;
    
    // Traduire la section adhésion
    const membershipTitle = document.querySelector('.membership-section h2');
    if (membershipTitle) membershipTitle.textContent = t.joinUs;
    
    const membershipInfo = document.querySelector('.membership-info h3');
    if (membershipInfo) membershipInfo.textContent = t.whyJoin;
    
    const benefitsList = document.querySelector('.benefits-list');
    if (benefitsList) {
        benefitsList.innerHTML = t.benefits.map(benefit => 
            `<li><i class="fas fa-check"></i> ${benefit}</li>`
        ).join('');
    }
    
    const joinCard = document.querySelector('.join-card h3');
    if (joinCard) joinCard.textContent = t.howToJoin;
    
    const joinText = document.querySelector('.join-card p');
    if (joinText) joinText.textContent = t.joinText;
    
    const contactBtn = document.querySelector('.join-btn span');
    if (contactBtn) contactBtn.textContent = t.contactUs;
    
    // Traduction dynamique de la section Public Speaking
    const publicSpeakingTitle = {
        fr: 'Public Speaking',
        en: 'Public Speaking',
        ar: 'الخطابة العامة'
    };
    const publicSpeakingDesc = {
        fr: "La section Public Speaking vise à développer les compétences oratoires, la confiance en soi et l'art de s'exprimer en public à travers des ateliers, des concours et des simulations de conférences.",
        en: "The Public Speaking section aims to develop oratory skills, self-confidence, and the art of public speaking through workshops, competitions, and conference simulations.",
        ar: "تهدف قسم الخطابة العامة إلى تطوير المهارات الخطابية والثقة بالنفس وفن التحدث أمام الجمهور من خلال ورش العمل والمسابقات ومحاكاة المؤتمرات."
    };
    const psTitleElem = document.querySelector('.club-public-speaking-title');
    const psDescElem = document.querySelector('.public-speaking-desc p');
    if(psTitleElem) psTitleElem.textContent = publicSpeakingTitle[lang] || publicSpeakingTitle['fr'];
    if(psDescElem) psDescElem.textContent = publicSpeakingDesc[lang] || publicSpeakingDesc['fr'];
}

// Navigation depuis le footer
document.addEventListener('DOMContentLoaded', function() {
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Simuler un clic sur l'élément de navigation correspondant
            const navItem = document.querySelector(`[data-section="${section}"]`);
            if (navItem) {
                navItem.click();
            }
        });
    });
    
    // Ajouter l'événement pour le bouton Explorer
    document.addEventListener('click', function(e) {
        if (e.target.closest('.explore-btn')) {
            loadDefinitionSection();
            
            // Scroll vers le haut de la page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Gérer le bouton "Nous Contacter" dans la section définition
        if (e.target.closest('.join-btn')) {
            e.preventDefault();
            
            // Mettre à jour la navigation active
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            const contactNavItem = document.querySelector('[data-section="contact"]');
            if (contactNavItem) {
                contactNavItem.classList.add('active');
            }
            
            // Charger la section contact
            renderContactSection(currentLang);
            
            // Scroll vers le haut de la page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
    
    // Ajouter l'animation de l'icône du bouton
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.join-btn')) {
            const icon = e.target.closest('.join-btn').querySelector('i');
            if (icon) {
                icon.style.transition = 'transform 0.3s ease';
            }
        }
    });
    
    document.addEventListener('mouseenter', function(e) {
        if (e.target.closest('.join-btn')) {
            const icon = e.target.closest('.join-btn').querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(5px)';
            }
        }
    });
    
    document.addEventListener('mouseleave', function(e) {
        if (e.target.closest('.join-btn')) {
            const icon = e.target.closest('.join-btn').querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        }
    });
});

// Initialisation avec la langue anglaise par défaut
changeLanguage('en');

// Mode sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    } else {
        document.body.classList.remove('dark');
        themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    }
    console.log('[Theme] Mode sombre:', isDarkMode);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        applyTheme();
    });
    // Appliquer le thème au chargement
    applyTheme();
}

// Accessibilité : fermer menu avec Echap
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closeMenu();
        langDropdownOpen = false;
        langDropdown.classList.remove('open');
    }
});

// Carrousel dynamique Accueil
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const carouselContainer = document.querySelector('.carousel-container');
    
    if (!slides.length || !prevBtn || !nextBtn || !carouselContainer) {
        console.log('Carousel elements not found');
        return;
    }
    
    let current = 0;
    let timer = null;
    let isAutoPlaying = true;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        current = idx;
    }
    
    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }
    
    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }
    
    function startAuto() {
        if (isAutoPlaying) {
        timer = setInterval(nextSlide, 4000);
    }
    }
    
    function stopAuto() {
        if (timer) {
        clearInterval(timer);
            timer = null;
        }
    }
    
    function handleNext() {
        stopAuto();
        nextSlide();
        startAuto();
    }
    
    function handlePrev() {
        stopAuto();
        prevSlide();
        startAuto();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
    
    // Pause on hover
    carouselContainer.addEventListener('mouseenter', stopAuto);
    carouselContainer.addEventListener('mouseleave', startAuto);
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
    }
    
    // Initialize
    showSlide(0);
    startAuto();
    
    console.log('Carousel initialized with', slides.length, 'slides');
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.carousel-section')) {
    initCarousel();
    }
});

// Also initialize when content is loaded dynamically
if (document.querySelector('.carousel-section')) {
    initCarousel();
}

// Function to reinitialize carousel when content changes
function reinitCarousel() {
    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
        // Remove existing event listeners
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        const carouselContainer = document.querySelector('.carousel-container');
        
        if (prevBtn) prevBtn.replaceWith(prevBtn.cloneNode(true));
        if (nextBtn) nextBtn.replaceWith(nextBtn.cloneNode(true));
        if (carouselContainer) carouselContainer.replaceWith(carouselContainer.cloneNode(true));
        
        // Reinitialize
        setTimeout(() => {
            initCarousel();
        }, 100);
    }
}

// Fonction pour créer le graphique d'évolution des membres
function createMembersChart() {
    const ctx = document.getElementById('membersChart');
    if (!ctx) return;
    
    // Couleurs dynamiques pour le graphique
    const colors = {
        primary: '#e2b889',
        secondary: '#DAA520',
        accent: '#FFD700',
        highlight: '#FFA500',
        gradient: ['#e2b889', '#DAA520', '#FFD700', '#FFA500', '#FF8C00', '#FF6347']
    };
    
    const data = {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
            label: 'Nouveaux Membres',
                data: [43, 67, 81, 120, 140, 140],
                backgroundColor: function(context) {
                const index = context.dataIndex;
                const barColors = [
                    '#e2b889',  // Marron doré
                    '#DAA520',  // Or classique
                    '#FFD700',  // Or brillant
                    '#FFA500',  // Orange doré
                    '#FF8C00',  // Orange foncé
                    '#FF6347'   // Rouge-orange
                ];
                return barColors[index % barColors.length];
                },
                borderColor: '#ffffff',
                borderWidth: 3,
                borderRadius: 8,
            borderSkipped: false,
            // Animation des barres
                barThickness: 60,
                maxBarThickness: 80,
                minBarLength: 20
            }]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: colors.primary,
                        font: {
                            size: 20,
                            weight: 'bold'
                        },
                        padding: 30,
                        usePointStyle: true,
                        pointStyle: 'rect'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: colors.accent,
                    bodyColor: '#ffffff',
                    borderColor: colors.primary,
                    borderWidth: 3,
                    cornerRadius: 15,
                    displayColors: true,
                    titleFont: {
                        size: 18,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 16
                    },
                    padding: 15,
                    callbacks: {
                        label: function(context) {
                            return `Membres: ${context.parsed.y}`;
                        },
                        title: function(context) {
                            return `Année ${context[0].label}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Année',
                        color: colors.primary,
                        font: {
                            size: 20,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(226, 184, 137, 0.3)',
                        borderColor: colors.primary,
                        borderWidth: 2,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        color: colors.primary,
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Nombre de Membres',
                        color: colors.primary,
                        font: {
                            size: 20,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(226, 184, 137, 0.3)',
                        borderColor: colors.primary,
                        borderWidth: 2,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        color: colors.primary,
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        callback: function(value) {
                            return value + ' membres';
                        },
                        padding: 15
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                onProgress: function(animation) {
                    const chart = animation.chart;
                    const ctx = chart.ctx;
                    const meta = chart.getDatasetMeta(0);
                    
                    // Animation des barres avec effet de vague
                    if (meta.data.length > 0) {
                        ctx.save();
                        
                        meta.data.forEach((bar, index) => {
                            const progress = animation.currentStep / animation.numSteps;
                            const barProgress = Math.min(1, progress * 2 - index * 0.2);
                            
                            if (barProgress > 0) {
                                // Effet de particules au sommet des barres
                                const barColors = [
                                    '#e2b889', '#DAA520', '#FFD700', '#FFA500', '#FF8C00', '#FF6347'
                                ];
                                const barColor = barColors[index % barColors.length];
                                
                                // Particules animées au sommet
                                for (let i = 0; i < 8; i++) {
                                    const time = Date.now() * 0.001 + index * 0.5;
                                    const angle = (i / 8) * 2 * Math.PI + time;
                                    const radius = 15 + Math.sin(time * 2 + i) * 5;
                                    const x = bar.x + Math.cos(angle) * radius;
                                    const y = bar.y + Math.sin(angle) * radius;
                                    
                                    ctx.globalAlpha = barProgress * 0.6;
                                    ctx.fillStyle = barColor;
                                    
                                    ctx.beginPath();
                                    ctx.arc(x, y, 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }
                                
                                // Effet de brillance sur les barres
                                const gradient = ctx.createLinearGradient(bar.x - bar.width/2, bar.y, bar.x + bar.width/2, bar.y);
                                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
                                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
                                
                                ctx.fillStyle = gradient;
                                ctx.fillRect(bar.x - bar.width/2, bar.y, bar.width, bar.height);
                            }
                        });
                        
                        ctx.restore();
                    }
                },
                onComplete: function(animation) {
                    // Animation continue des barres
                    const chart = animation.chart;
                    const meta = chart.getDatasetMeta(0);
                    
                    function animateBars() {
                        meta.data.forEach((bar, index) => {
                            const time = Date.now() * 0.001 + index * 0.3;
                            
                            // Animation de hauteur des barres
                            const heightVariation = Math.sin(time) * 0.05;
                            bar._model.base = bar._model.base;
                            bar._model.y = bar._model.y + Math.sin(time) * 2;
                            
                            // Animation de largeur
                            const widthVariation = Math.sin(time * 0.5) * 0.1;
                            bar._model.width = bar._model.width * (1 + widthVariation);
                            
                            // Effet de brillance
                            bar._model.borderWidth = 3 + Math.sin(time) * 1;
                        });
                        chart.update('none');
                        requestAnimationFrame(animateBars);
                    }
                    
                    setTimeout(animateBars, 1000);
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            elements: {
                bar: {
                    hoverRadius: 15,
                    hoverBorderWidth: 5
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// Fonction pour convertir hex en RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Fonction pour créer le graphique des sections
function createSectionsChart() {
    const ctx = document.getElementById('sectionsChart');
    if (!ctx) return;
    if (window.sectionsChartInstance) {
        window.sectionsChartInstance.destroy();
    }
    const colors = ['#e67e22', '#d35400', '#f6c28b'];
    const data = {
        labels: ['Débat Français', 'Débat Anglais', 'Débat Arabe'],
            datasets: [{
            data: [40, 34, 54],
            backgroundColor: colors,
                borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 0,
            hoverBorderWidth: 1,
            hoverOffset: 0,
            }]
    };
    window.sectionsChartInstance = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        color: '#222',
                        font: { size: 15, weight: 'normal', family: 'Arial, sans-serif' },
                        padding: 16,
                        boxWidth: 18,
                        boxHeight: 12,
                        usePointStyle: false,
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#fff',
                    titleColor: '#222',
                    bodyColor: '#222',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    cornerRadius: 4,
                    displayColors: true,
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    padding: 10,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed} membres`;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1200,
                easing: 'easeOutQuart'
            },
            layout: {
                padding: 0
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
        },
        plugins: []
    });
}

// Traductions pour les cellules et la section Nos Sections

const footerTitlesTranslations = {
    fr: {
        menu: 'Menu',
        contact: 'Contact',
        follow: 'Suivez-nous'
    },
    en: {
        menu: 'Menu',
        contact: 'Contact',
        follow: 'Follow us'
    },
    ar: {
        menu: 'القائمة',
        contact: 'اتصل بنا',
        follow: 'تابعونا'
    }
};

function translateFooterTitles(lang) {
    const menu = document.getElementById('footer-menu-title');
    const contact = document.getElementById('footer-contact-title');
    const follow = document.getElementById('footer-follow-title');
    if(menu) menu.textContent = footerTitlesTranslations[lang]?.menu || 'Menu';
    if(contact) contact.textContent = footerTitlesTranslations[lang]?.contact || 'Contact';
    if(follow) follow.textContent = footerTitlesTranslations[lang]?.follow || 'Follow us';
    // Traduire la description du club
    const desc = document.querySelector('.footer-description');
    if(desc) desc.textContent = footerDescriptionTranslations[lang] || footerDescriptionTranslations.fr;
    // Traduire les infos de contact
    const contactPs = document.querySelectorAll('.footer-contact p');
    const contactArr = footerContactTranslations[lang] || footerContactTranslations.fr;
    contactPs.forEach((p, i) => { if(contactArr[i]) p.innerHTML = contactArr[i]; });
}

function translateFooterMenuLinks(lang) {
    const footerLinks = document.querySelectorAll('.footer-links a');
    const navLabels = [
        translations[lang]['accueil'],
        translations[lang]['aPropos'],
        translations[lang]['palmares'],
        translations[lang]['bureau'],
        translations[lang]['evenements'],
        translations[lang]['contact']
    ];
    footerLinks.forEach((link, i) => {
        if (navLabels[i]) link.textContent = navLabels[i];
    });
}

const originalChangeLanguage2 = changeLanguage;
changeLanguage = function(lang) {
    originalChangeLanguage2(lang);
    translateFooterTitles(lang);
    translateFooterMenuLinks(lang);
};

// === AJOUT : Traductions pour la description et les infos de contact du footer ===
const footerDescriptionTranslations = {
  fr: "Club de débat d'excellence de l'École Hassania des Travaux Publics, formant les leaders de demain à travers l'art de la persuasion et de l'éloquence.",
  en: "Excellence debate club of Hassania School of Public Works, training tomorrow's leaders through the art of persuasion and eloquence.",
  ar: "نادي مناظرات متميز بالمدرسة الحسنية للأشغال العمومية، يُكوّن قادة الغد عبر فن الإقناع والبلاغة."
};
const footerContactTranslations = {
  fr: [
    '<i class="fas fa-map-marker-alt"></i> EHTP, Route d\'El Jadida, Casablanca',
    '<i class="fas fa-envelope"></i> great.debaters.ehtp@gmail.com',
    '<i class="fas fa-phone"></i> +212  7 02 24 55 29'
  ],
  en: [
    '<i class="fas fa-map-marker-alt"></i> Hassania School of Public Works, Route d\'El Jadida, Casablanca',
    '<i class="fas fa-envelope"></i> great.debaters.ehtp@gmail.com',
    '<i class="fas fa-phone"></i> +212  7 02 24 55 29'
  ],
  ar: [
    '<i class="fas fa-map-marker-alt"></i> المدرسة الحسنية للأشغال العمومية، طريق الجديدة، الدار البيضاء',
    '<i class="fas fa-envelope"></i> great.debaters.ehtp@gmail.com',
    '<i class="fas fa-phone"></i> +212  7 02 24 55 29'
  ]
};

// === INITIALISATION CORRECTE DU CARROUSEL ===
document.addEventListener('DOMContentLoaded', function() {
    // Forcer la langue française à chaque chargement
    localStorage.setItem('lang', 'fr');
    currentLang = 'fr';
    changeLanguage('fr');
    // Initialiser la langue par défaut
    changeLanguage(currentLang || 'en');
    // Initialiser le carrousel si présent
    if (document.querySelector('.carousel')) {
        initCarousel();
    }
    // Gestion des clics sur la navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            loadSection(section);
        });
    });
    
    // Gestion des clics sur les liens du footer
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                loadSection(section);
            }
        });
    });
    
    // Charger la section depuis l'URL au chargement de la page
    function loadSectionFromURL() {
        const hash = window.location.hash.substring(1); // Enlever le #
        if (hash) {
            // Vérifier que la section existe
            const validSections = ['accueil', 'a-propos', 'palmares', 'bureau', 'evenements', 'revue', 'contact'];
            if (validSections.includes(hash)) {
                loadSection(hash);
                return;
            }
        }
        // Par défaut, charger l'accueil
        loadSection('accueil');
    }
    
    // Charger la section depuis l'URL au chargement
    loadSectionFromURL();
    
    // Gérer les changements de hash dans l'URL (navigation avant/arrière)
    window.addEventListener('hashchange', function() {
        loadSectionFromURL();
    });
    
    // Gérer le bouton retour du navigateur
    window.addEventListener('popstate', function() {
        loadSectionFromURL();
    });
});

function loadSection(section) {
    currentSection = section;
    // Mettre à jour l'URL avec le hash de la section
    if (section === 'accueil') {
        // Pour l'accueil, on peut utiliser '/' ou pas de hash
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
    } else {
        // Pour les autres sections, ajouter le hash dans l'URL
        history.pushState(null, '', `#${section}`);
    }
    
    // Mettre à jour la navigation active
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const navItem = document.querySelector(`[data-section="${section}"]`);
    if (navItem) navItem.classList.add('active');
    
    // Scroll vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Charger le contenu
    if (section === 'accueil') {
        loadHomeSection();
    } else if (section === 'a-propos') {
        loadDefinitionSection();
    } else if (section === 'bureau') {
        loadBureauSection();
    } else if (section === 'evenements') {
        loadEvenementsSection();
    } else if (section === 'revue') {
        loadRevueSection();
    } else if (section === 'contact') {
        renderContactSection(currentLang);
    } else {
        // Charger les autres sections si besoin
    }
    console.log('[Nav] Section chargée:', section);
}

function loadHomeSection() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = carouselHTML[currentLang];
    
    // Réinitialiser le carousel après le chargement du contenu
    setTimeout(() => {
    initCarousel();
    }, 100);
    
    translateContent(currentLang);
}

function loadBureauSection() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section class="bureau-section">
            <div class="bureau-header">
                <h2>${translations[currentLang].bureauTitle}</h2>
                <p>${translations[currentLang].bureauSubtitle}</p>
            </div>
            
            <div class="bureau-content">
                <!-- Président au centre -->
                <div class="bureau-member-card president-card">
                    <div class="member-photo-frame">
                        <img src="board/821570.jpg" alt="Nadahe Mohammed - Président" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].president}</h3>
                        <p class="member-name">Gouzi Imane</p>
                        <div class="member-badge"><i class="fas fa-crown"></i></div>
                    </div>
                </div>
                
                <!-- Vice-Président -->
                <div class="bureau-member-card vice-president-card">
                    <div class="member-photo-frame">
                        <img src="board/Kibach Farah.png" alt="Douae El Khadiri - Vice-Président" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].vicePresident}</h3>
                        <p class="member-name">Kibach Farah</p>
                        <div class="member-badge"><i class="fas fa-chart-line"></i></div>
                    </div>
                </div>
                <!-- Secrétaire Général -->
                <div class="bureau-member-card vice-president-card">
                    <div class="member-photo-frame">
                        <img src="board/Chaouki Doha.png" alt="Douae El Khadiri - Vice-Président" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].vicePresident}</h3>
                        <p class="member-name">Chaouki Doha</p>
                        <div class="member-badge"><i class="fas fa-chart-line"></i></div>
                    </div>
                </div>


                <!-- Chef Formation -->
                <div class="bureau-member-card training-card">
                    <div class="member-photo-frame">
                        <img src="board/Mali khaoula.png" alt="Niama Abid - Chef Formation" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].trainingChief}</h3>
                        <p class="member-name">Mali khaoula</p>
                        <div class="member-badge"><i class="fas fa-graduation-cap"></i></div>
                    </div>
                </div>
                
                
                
                <!-- Chef Media & Design -->
                <div class="bureau-member-card media-card">
                    <div class="member-photo-frame">
                        <img src="board/lahseini hayat.png" alt="Amine Hamdaoui - Chef Media & Design" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].mediaDesignChief}</h3>
                        <p class="member-name">Lahseini Hayat</p>
                        <div class="member-badge"><i class="fas fa-palette"></i></div>
                    </div>
                </div>
                
                <!-- Chef Section Française -->
                <div class="bureau-member-card french-card">
                    <div class="member-photo-frame">
                        <img src="board/El Manssouri Otmane.png" alt="Bérete Lonceny - Chef Section Française" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].frenchSectionChief}</h3>
                        <p class="member-name">El Manssouri Otmane</p>
                        <div class="member-badge"><i class="fas fa-flag"></i></div>
                    </div>
                </div>
                
                <!-- Chef Section Anglaise -->
                <div class="bureau-member-card english-card">
                    <div class="member-photo-frame">
                        <img src="board/Bouchta Nassima.png" alt="Mohammed Yassine Djaouane - Chef Section Anglaise" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].englishSectionChief}</h3>
                        <p class="member-name">Bouchta Nassima</p>
                        <div class="member-badge"><i class="fas fa-flag-usa"></i></div>
                    </div>
                </div>
                
                <!-- Chef Section Arabe -->
                <div class="bureau-member-card arabic-card">
                    <div class="member-photo-frame">
                        <img src="board/عصماء سيرين بنبلى.png" alt="Salma Bouabane - Chef Section Arabe" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].arabicSectionChief}</h3>
                        <p class="member-name">Asmaa Sirine Benbella</p>
                        <div class="member-badge"><i class="fas fa-star-and-crescent"></i></div>
                    </div>
                </div>
                
                <!-- Chef Sponsoring -->
                <div class="bureau-member-card sponsoring-card">
                    <div class="member-photo-frame">
                        <img src="board/kanza masbahi.png" alt="Zainab Qasmi - Chef Sponsoring" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>${translations[currentLang].sponsoringChief}</h3>
                        <p class="member-name">Kanza Masbahi</p>
                        <div class="member-badge"><i class="fas fa-handshake"></i></div>
                    </div>
                </div>
                
                
                
                <!-- Responsable Revue -->
                <div class="bureau-member-card revue-card">
                    <div class="member-photo-frame">
                        <img src="board/Taghzouti Aya.png" alt="Aicha Mabchour - Responsable Revue" class="member-photo-img">
                    </div>
                    <div class="member-info">
                        <h3>Responsable Revue</h3>
                        <p class="member-name">Taghzouti Aya</p>
                        <div class="member-badge"><i class="fas fa-newspaper"></i></div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Appliquer les traductions
    translateContent(currentLang);
}

function loadEvenementsSection() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section class="evenements-section">
            <div class="evenements-header">
                <h2>${translations[currentLang].evenementsTitle}</h2>
                <p>${translations[currentLang].evenementsSubtitle}</p>
            </div>
            
            <div class="evenements-content">
                <!-- VEE - Événement Principal -->
                <div class="vee-event-card">
                    <div class="vee-golden-frame">
                        <div class="vee-title-golden">
                            <h1>La Valse des Esprits Éclairés</h1>
                        </div>
                        <div class="vee-image-container">
                            <img src="La Valse des Esprits éclairés.png" alt="La Valse des Esprits Éclairés" class="vee-event-image">
                        </div>
                        <div class="vee-content">
                            <div class="vee-introduction">
                                <p>Conscients de l'ampleur et l'ultime importance que jouent les compétitions nationales et régionales de débat, nous, The Great Debaters EHTP, avons condensés nos efforts pour garder une emprunte indélébile au sein de la communauté.</p>
                                <p>Ainsi, nous concrétisons enfin un projet sur lequel quatre mandats successifs ont contribué avec un engagement soutenu et une détermination sans faille, y mettant leur cœur et leur âme pour offrir une expérience gratifiante aux participants, et un succès phénoménal à la famille TGD EHTP.</p>
                                <p>Dans cette quête incessante de l'excellence, notre collectif a eu l'ineffable privilège d'organiser, cette année, la première édition tant attendue de la compétition nationale de débat, pérennisant ainsi une tradition intellectuelle et rhétorique au sein même de notre réseau.</p>
                            </div>
                            
                            <div class="vee-definition-section">
                                <div class="vee-definition-header">
                                    <h3>🎯 <span class="translate" data-key="vee.definitionTitle">Définition de l'Événement</span></h3>
                                    <p class="translate" data-key="vee.definitionSubtitle">Comprendre l'essence de La Valse des Esprits Éclairés</p>
                                </div>
                                <div class="vee-definition-content">
                                    <div class="vee-definition-card">
                                        <div class="vee-definition-icon">
                                            <i class="fas fa-trophy"></i>
                                        </div>
                                        <div class="vee-definition-text">
                                            <h4>Compétition de Débat</h4>
                                            <p>La Valse des Esprits Éclairés est une compétition de débat qui s'organise au sein de l'EHTP, réunissant des écoles d'ingénieurs et de commerce marocains dans un cadre d'excellence académique et rhétorique.</p>
                                        </div>
                                    </div>
                                    
                                    <div class="vee-definition-features">
                                        <div class="vee-definition-feature">
                                            <div class="vee-definition-feature-icon">
                                                <i class="fas fa-flag"></i>
                                            </div>
                                            <div class="vee-definition-feature-content">
                                                <h5>Section Française</h5>
                                                <p>Débats en français pour valoriser l'excellence linguistique et rhétorique</p>
                                            </div>
                                        </div>
                                        
                                        <div class="vee-definition-feature">
                                            <div class="vee-definition-feature-icon">
                                                <i class="fas fa-star-and-crescent"></i>
                                            </div>
                                            <div class="vee-definition-feature-content">
                                                <h5>Section Arabe</h5>
                                                <p>Débats en arabe pour célébrer la richesse culturelle et linguistique</p>
                                            </div>
                                        </div>
                                        
                                        <div class="vee-definition-feature">
                                            <div class="vee-definition-feature-icon">
                                                <i class="fas fa-flag-usa"></i>
                                            </div>
                                            <div class="vee-definition-feature-content">
                                                <h5>Section Anglaise</h5>
                                                <p>Débats en anglais pour promouvoir l'internationalisation et l'ouverture</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="vee-definition-highlights">
                                        <div class="vee-definition-highlight">
                                            <i class="fas fa-university"></i>
                                            <span>Écoles d'Ingénieurs</span>
                                        </div>
                                        <div class="vee-definition-highlight">
                                            <i class="fas fa-briefcase"></i>
                                            <span>Écoles de Commerce</span>
                                        </div>
                                        <div class="vee-definition-highlight">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>Maroc</span>
                                        </div>
                                        <div class="vee-definition-highlight">
                                            <i class="fas fa-microphone-alt"></i>
                                            <span>Débats Multilingues</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="vee-description">
                                <p>${translations[currentLang].veeDescription}</p>
                            </div>
                            <div class="vee-details">
                                <div class="vee-detail-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>${translations[currentLang].veeDate}</span>
                                </div>
                                <div class="vee-detail-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>${translations[currentLang].veeLocation}</span>
                                </div>
                            </div>
                            <div class="vee-features">
                                <div class="vee-feature">
                                    <i class="fas fa-microphone"></i>
                                    <span>Débats</span>
                                </div>
                                <div class="vee-feature">
                                    <i class="fas fa-trophy"></i>
                                    <span>Compétition</span>
                                </div>
                                <div class="vee-feature">
                                    <i class="fas fa-users"></i>
                                    <span>Réseautage</span>
                                </div>
                            </div>
                            
                            <div class="vee-partners-section academic-partners">
                                <div class="vee-partners-header">
                                    <h3>🏛️ <span class="translate" data-key="partners.academicPartners">Écoles Partenaires</span></h3>
                                    <p class="translate" data-key="partners.academicPartnersDesc">Découvrez nos partenaires académiques prestigieux</p>
                                </div>
                                <div class="vee-partners-content">
                                    <div class="vee-partner-card">
                                        <div class="vee-partner-image-container">
                                            <img src="ecole partenaire.png" alt="École Partenaire" class="vee-partner-image">
                                            <div class="vee-partner-overlay">
                                                <div class="vee-partner-info">
                                                    <h4>Partenaire Académique</h4>
                                                    <p>Collaboration d'excellence</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vee-partner-details">
                                            <div class="vee-partner-badge">
                                                <i class="fas fa-handshake"></i>
                                                <span>Partenaire Officiel</span>
                                            </div>
                                            <div class="vee-partner-stats">
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-star"></i>
                                                    <span>Excellence</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-award"></i>
                                                    <span>Qualité</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-graduation-cap"></i>
                                                    <span>Formation</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="vee-partners-section media-partners">
                                <div class="vee-partners-header">
                                    <h3>📺 <span class="translate" data-key="partners.mediaPartners">Partenaires Médiatiques</span></h3>
                                    <p class="translate" data-key="partners.mediaPartnersDesc">Découvrez nos partenaires médiatiques d'excellence</p>
                                </div>
                                <div class="vee-partners-content">
                                    <div class="vee-partner-card">
                                        <div class="vee-partner-image-container">
                                            <img src="Part mediatique.png" alt="Partenaire Médiatique" class="vee-partner-image">
                                            <div class="vee-partner-overlay">
                                                <div class="vee-partner-info">
                                                    <h4>Partenaire Médiatique</h4>
                                                    <p>Couverture médiatique d'excellence</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vee-partner-details">
                                            <div class="vee-partner-badge">
                                                <i class="fas fa-broadcast-tower"></i>
                                                <span>Partenaire Média</span>
                                            </div>
                                            <div class="vee-partner-stats">
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-tv"></i>
                                                    <span>Couverture</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-newspaper"></i>
                                                    <span>Presse</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-video"></i>
                                                    <span>Reportage</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="vee-partners-section sponsors-section">
                                <div class="vee-partners-header">
                                    <h3>💎 <span class="translate" data-key="partners.sponsors">Sponsors de la version précédente VEE</span></h3>
                                    <p class="translate" data-key="partners.sponsorsDesc">Découvrez nos sponsors officiels de l'événement VEE</p>
                                </div>
                                <div class="vee-partners-content">
                                    <div class="vee-partner-card sponsor-card">
                                        <div class="vee-partner-image-container">
                                            <img src="part off.png" alt="Sponsor Officiel" class="vee-partner-image">
                                            <div class="vee-partner-overlay">
                                                <div class="vee-partner-info">
                                                    <h4>Sponsor Officiel</h4>
                                                    <p>Partenaire financier principal</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vee-partner-details">
                                            <div class="vee-partner-badge">
                                                <i class="fas fa-gem"></i>
                                                <span>Sponsor Principal</span>
                                            </div>
                                            <div class="vee-partner-stats">
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-dollar-sign"></i>
                                                    <span>Financement</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-crown"></i>
                                                    <span>Premium</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-star"></i>
                                                    <span>Exclusif</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="vee-partner-card sponsor-card">
                                        <div class="vee-partner-image-container">
                                            <img src="sponso nature.png" alt="Sponsor Nature" class="vee-partner-image">
                                            <div class="vee-partner-overlay">
                                                <div class="vee-partner-info">
                                                    <h4>Sponsor Nature</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="vee-partner-details">
                                            <div class="vee-partner-badge">
                                                <i class="fas fa-leaf"></i>
                                                <span>Sponsor par nature</span>
                                            </div>
                                            <div class="vee-partner-stats">
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-seedling"></i>
                                                    <span>Écologie</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-recycle"></i>
                                                    <span>Durable</span>
                                                </div>
                                                <div class="vee-partner-stat">
                                                    <i class="fas fa-tree"></i>
                                                    <span>Nature</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Appliquer les traductions
    translateContent(currentLang);
}

function loadRevueSection() {
    const mainContent = document.getElementById('main-content');
    // ID de la publication Instagram
    const instagramPostId = "DRXKtpnjsk8";
    
    mainContent.innerHTML = `
        <section class="revue-section">
            <div class="revue-header">
                <h2>${translations[currentLang].revueTitle}</h2>
                <p>${translations[currentLang].revueSubtitle}</p>
            </div>
            
            <div class="revue-content">
                <div class="revue-main-card">
                    <div class="revue-card-decoration-top">
                        <div class="decoration-corner top-left"></div>
                        <div class="decoration-corner top-right"></div>
                    </div>
                    
                    <div class="revue-card-content">
                        <div class="revue-card-header">
                            <div class="revue-main-icon">
                                <div class="icon-glow"></div>
                                <i class="fas fa-book-reader"></i>
                            </div>
                            <div class="revue-header-text">
                                <h3 class="revue-main-title">Tazlayjit</h3>
                                <p class="revue-main-subtitle">Le Maroc entre patriotisme et chauvinisme national</p>
                                <div class="revue-edition-badge">
                                    <i class="fas fa-star"></i>
                                    <span>1ère Édition</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="revue-pdf-display">
                            <div class="pdf-display-container">
                                <div class="pdf-display-frame">
                                    <div class="pdf-display-shine"></div>
                                    <div class="pdf-display-content">
                                        <div class="pdf-display-icon-wrapper">
                                            <div class="pdf-display-icon-glow"></div>
                                            <i class="fas fa-file-pdf"></i>
                                        </div>
                                        <div class="pdf-display-info">
                                            <h4>Revue Tazlayjit</h4>
                                            <p>Première édition</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="revue-action-buttons">
                            <a href="Revue/1ere édition de revue (11) (1).pdf" download="Tazlayjit - 1ere edition.pdf" class="revue-download-btn">
                                <div class="btn-icon-wrapper">
                                    <i class="fas fa-download"></i>
                                </div>
                                <span>Télécharger la revue</span>
                                <div class="btn-arrow">
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </a>
                            
                            <a href="Revue/1ere édition de revue (11) (1).pdf" target="_blank" class="revue-view-btn">
                                <div class="btn-icon-wrapper">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <span>Voir en ligne</span>
                                <div class="btn-arrow">
                                    <i class="fas fa-external-link-alt"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="revue-card-decoration-bottom">
                        <div class="decoration-corner bottom-left"></div>
                        <div class="decoration-corner bottom-right"></div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Appliquer les traductions
    translateContent(currentLang);
}
// ... existing code ...
// Ajout de logs pour le débogage
console.log('[Init] Script chargé.');



// ... existing code ...

// === EFFET FEU D'ARTIFICE POUR L'ANNIVERSAIRE ===
function triggerFireworks() {
    // Créer le conteneur des feux d'artifice
    const fireworksContainer = document.createElement('div');
    fireworksContainer.id = 'fireworks-container';
    fireworksContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(fireworksContainer);

    // Créer plusieurs explosions
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirework(fireworksContainer);
        }, i * 200);
    }

    // Supprimer le conteneur après 4 secondes
    setTimeout(() => {
        if (fireworksContainer.parentNode) {
            fireworksContainer.parentNode.removeChild(fireworksContainer);
        }
    }, 4000);
}

function createFirework(container) {
    const firework = document.createElement('div');
    firework.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        pointer-events: none;
    `;

    // Position aléatoire
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.6;
    
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';

    // Couleurs dorées et orange
    const colors = ['#FFD700', '#FFA500', '#FF8C00', '#FF6347', '#FF4500', '#FFD700'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.backgroundColor = color;
    firework.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;

    container.appendChild(firework);

    // Animation d'explosion
    const particles = [];
    const particleCount = 30;

    // Créer les particules
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background-color: ${color};
            box-shadow: 0 0 5px ${color};
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        container.appendChild(particle);
        particles.push(particle);
    }

    // Animer les particules
    particles.forEach((particle, index) => {
        const angle = (index / particleCount) * 2 * Math.PI;
        const distance = 50 + Math.random() * 100;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        const duration = 1000 + Math.random() * 500;

        // Animation avec keyframes
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        };
    });

    // Supprimer le feu d'artifice principal
    setTimeout(() => {
        if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
        }
    }, 1500);
}

// Effet de vibration sur le bloc anniversaire
function addAnniversaryClickEffect() {
    const anniversaryBox = document.querySelector('.club-anniversary-box');
    if (anniversaryBox) {
        anniversaryBox.style.cursor = 'pointer';
        anniversaryBox.style.transition = 'transform 0.1s ease';
        
        anniversaryBox.addEventListener('click', function() {
            // Effet de vibration
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
            
            // Déclencher les feux d'artifice
            triggerFireworks();
        });
    }
}

// Appliquer l'effet quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Observer les changements pour appliquer l'effet aux nouveaux blocs anniversaire
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.querySelector) {
                        const anniversaryBox = node.querySelector('.club-anniversary-box');
                        if (anniversaryBox) {
                            addAnniversaryClickEffect();
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Appliquer l'effet aux blocs existants
    addAnniversaryClickEffect();
});
