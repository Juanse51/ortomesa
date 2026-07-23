/* ============================================================
   ORTOMESA – Traducciones (Español / English)
   Los elementos traducibles llevan el atributo data-i18n.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var I18N = {

    es: {
      topbar_hours: 'Lun – Vie &nbsp;8:00 am – 5:00 pm',

      nav_home: 'Inicio',
      nav_about: '¿Quiénes somos?',
      nav_services: 'Servicios',
      nav_testimonials: 'Testimonios',
      nav_cta: 'Agenda una cita',

      hero_badge: 'Consultorio Ortomesa · Armenia, Quindío',
      hero_title: 'Tratamiento del dolor<br><em>articular</em> con tecnología de punta',
      hero_sub: 'En Ortomesa contamos con más de 15 años de experiencia en cirugía ortopédica, medicina regenerativa y ondas de choque para mejorar tu calidad de vida.',
      hero_btn_cta: 'Agenda tu cita',
      hero_btn_more: 'Conoce más',
      stat_years: 'años de experiencia',
      stat_procedures: 'procedimientos',
      stat_commitment: 'compromiso',

      feat1_title: 'Tratamiento del dolor',
      feat1_text: 'Rodilla, hombro, pie y codo tratados con métodos avanzados y mínimamente invasivos.',
      feat2_title: 'Última tecnología',
      feat2_text: 'Ondas de choque y células de regeneración para mejorar tu movilidad sin cirugía.',
      feat3_title: 'Cirugía especializada',
      feat3_text: 'Solo cuando es necesario, evaluando siempre todas las alternativas disponibles.',

      about_tag: 'Nuestro especialista',
      about_p1: 'Médico ortopedista con más de 15 años de experiencia, responsable y comprometido con sus pacientes y sus familias. En continua actualización médica e investigativa, con sentido social y de pertenencia.',
      about_p2: 'Supraespecialista en Cirugía de Hombro y Rodilla, Cirugía Artroscópica y Traumatología Deportiva. Experto en Ecografía Músculo-Esquelética (Universidad Francisco de Victoria, Madrid, España).',
      about_p3: 'Miembro de la Sociedad Internacional de Ondas de Choque (ISWT) y expresidente de la Sociedad Quindiana de Ortopedia (SCCOT).',
      about_badge: 'procedimientos<br>exitosos',
      pill1: 'Hombro &amp; Rodilla',
      pill2: 'Artroscopia',
      pill3: 'Ondas de choque',
      pill4: 'Medicina Regenerativa',
      pill5: 'Traumatología deportiva',
      about_btn: 'Agenda una consulta',

      cta_title: 'Es momento de acabar con el dolor',
      cta_text: 'Contamos con el conocimiento, la experiencia y la certificación para brindarte una terapia que mejorará tu calidad de vida.',
      cta_btn: 'Escríbenos ahora',

      svc_tag: 'Nuestros servicios',
      svc_title: '¿En qué podemos ayudarte?',
      svc_sub: 'Tratamientos especializados en medicina regenerativa, ondas de choque y terapias biológicas para mejorar tu dolor y recuperar tu bienestar.',
      svc1_title: 'Lesión de rodilla',
      svc1_text: 'Las lesiones de rodilla son comunes y pueden afectar a personas de todas las edades y niveles de actividad.',
      svc2_title: 'Lesión de hombro',
      svc2_text: 'Las lesiones de hombro pueden ser debilitantes y afectar significativamente la calidad de vida de una persona.',
      svc3_title: 'Lesión de codo',
      svc3_text: 'El codo es susceptible a diversas lesiones que limitan la flexión, extensión y rotación del antebrazo.',
      svc4_title: 'Lesión de pie',
      svc4_text: 'Las lesiones de pie pueden afectar gravemente la movilidad y la calidad de vida de una persona.',
      svc5_title: 'Ondas de choque',
      svc5_text: 'Técnica no invasiva que utiliza ondas acústicas de alta energía para estimular la curación y reducir el dolor.',
      svc6_title: 'Células regenerativas',
      svc6_text: 'Repara tejidos dañados y estimula la regeneración natural del cuerpo con tus propios recursos biológicos.',

      svc_more: 'Ver más',
      modal_treatment_label: 'Tratamiento',
      modal_recovery_label: 'Recomendaciones para la recuperación',
      modal_disclaimer: 'Esta información es orientativa: cada caso se evalúa de forma individual en consulta.',
      modal_cta: 'Agenda tu valoración',

      svc1_modal_desc: 'La rodilla es una de las articulaciones más complejas y con mayor carga del cuerpo. Lesiones como la ruptura de meniscos, las lesiones de ligamento cruzado, la condromalacia y la artrosis pueden causar dolor, inflamación e inestabilidad, limitando actividades tan básicas como caminar o subir escaleras.',
      svc1_modal_treatment: '<li>Valoración especializada con ecografía músculo-esquelética para un diagnóstico preciso.</li><li>Manejo del dolor con medicina regenerativa (plasma rico en plaquetas y células regenerativas).</li><li>Terapia de ondas de choque para tendinopatías y lesiones crónicas.</li><li>Cirugía artroscópica mínimamente invasiva cuando el caso lo requiere.</li>',
      svc1_modal_recovery: '<li>Seguir el plan de fisioterapia y fortalecimiento muscular indicado.</li><li>Controlar el peso corporal para reducir la carga sobre la articulación.</li><li>Evitar actividades de alto impacto durante la fase de recuperación.</li><li>Aplicar frío local y respetar los tiempos de reposo indicados.</li><li>Asistir a los controles para ajustar el tratamiento según la evolución.</li>',

      svc2_modal_desc: 'El hombro es la articulación con mayor rango de movimiento del cuerpo, lo que lo hace vulnerable a lesiones como la ruptura del manguito rotador, tendinitis, bursitis, luxaciones e inestabilidad. Estas condiciones generan dolor nocturno y dificultad para las actividades cotidianas.',
      svc2_modal_treatment: '<li>Diagnóstico con ecografía músculo-esquelética en consulta.</li><li>Infiltraciones ecoguiadas y medicina regenerativa para tendinopatías.</li><li>Ondas de choque para calcificaciones y tendinitis crónicas.</li><li>Artroscopia de hombro para reparación del manguito rotador e inestabilidad.</li>',
      svc2_modal_recovery: '<li>Realizar los ejercicios de movilidad y fortalecimiento progresivo indicados.</li><li>Evitar cargar peso o hacer movimientos por encima de la cabeza en las primeras semanas.</li><li>Mantener una buena postura y hacer pausas activas en el trabajo.</li><li>Usar el cabestrillo durante el tiempo indicado en caso de cirugía.</li><li>No suspender la rehabilitación aunque el dolor mejore.</li>',

      svc3_modal_desc: 'El codo participa en casi todos los movimientos del brazo y la mano. Lesiones como la epicondilitis (codo de tenista), la epitrocleítis (codo de golfista), la bursitis y los atrapamientos nerviosos causan dolor que limita la fuerza de agarre y la actividad laboral o deportiva.',
      svc3_modal_treatment: '<li>Evaluación clínica y ecográfica para identificar el tejido afectado.</li><li>Ondas de choque, tratamiento de elección en la epicondilitis crónica.</li><li>Plasma rico en plaquetas para estimular la reparación del tendón.</li><li>Cirugía en casos seleccionados que no responden al manejo conservador.</li>',
      svc3_modal_recovery: '<li>Modificar temporalmente las actividades que desencadenan el dolor.</li><li>Realizar ejercicios excéntricos de fortalecimiento según indicación.</li><li>Usar banda de epicondilitis si el especialista lo recomienda.</li><li>Corregir la técnica deportiva o la ergonomía laboral para evitar recaídas.</li>',

      svc4_modal_desc: 'El pie soporta todo el peso del cuerpo en cada paso. Condiciones como la fascitis plantar, el espolón calcáneo, la tendinopatía de Aquiles, los esguinces y las metatarsalgias producen dolor que altera la marcha y la calidad de vida.',
      svc4_modal_treatment: '<li>Diagnóstico ecográfico de fascia, tendones y ligamentos.</li><li>Ondas de choque para fascitis plantar y espolón calcáneo.</li><li>Medicina regenerativa en tendinopatía de Aquiles y lesiones crónicas.</li><li>Manejo integral con recomendaciones de calzado y plantillas.</li>',
      svc4_modal_recovery: '<li>Usar calzado con buen soporte y amortiguación.</li><li>Realizar estiramientos de la fascia plantar y la pantorrilla a diario.</li><li>Evitar caminar descalzo sobre superficies duras durante la recuperación.</li><li>Retomar la actividad deportiva de forma gradual y progresiva.</li>',

      svc5_modal_desc: 'Tecnología no invasiva que aplica ondas acústicas de alta energía sobre el tejido lesionado, estimulando la formación de nuevos vasos sanguíneos, la regeneración del tejido y la disminución del dolor. Está avalada internacionalmente para múltiples patologías del sistema músculo-esquelético.',
      svc5_modal_treatment: '<li>Sesiones ambulatorias de 15 a 20 minutos, sin anestesia ni incapacidad.</li><li>Se realiza en ciclos de 3 a 5 sesiones según la patología.</li><li>Indicada en fascitis plantar, epicondilitis, tendinitis calcificada de hombro y tendinopatía de Aquiles, entre otras.</li><li>Aplicada por un especialista miembro de la Sociedad Internacional de Ondas de Choque (ISWT).</li>',
      svc5_modal_recovery: '<li>Puede presentarse molestia leve o enrojecimiento pasajero tras la sesión: es normal.</li><li>Evitar antiinflamatorios en los días posteriores (interfieren con el efecto regenerador), salvo indicación médica.</li><li>Mantener reposo deportivo relativo entre sesiones.</li><li>Completar el ciclo de sesiones: el efecto es acumulativo y progresivo.</li>',

      svc6_modal_desc: 'La medicina regenerativa utiliza recursos biológicos del propio paciente —como el plasma rico en plaquetas y los concentrados celulares— para reparar tejidos dañados, disminuir la inflamación y retrasar la progresión del desgaste articular, evitando o posponiendo cirugías.',
      svc6_modal_treatment: '<li>Obtención de la muestra del propio paciente y preparación en el mismo procedimiento.</li><li>Aplicación ecoguiada y precisa en la articulación o el tendón afectado.</li><li>Procedimiento ambulatorio, con mínimas molestias.</li><li>Indicado en artrosis, lesiones de cartílago, tendinopatías y lesiones musculares.</li>',
      svc6_modal_recovery: '<li>Reposo relativo de 24 a 72 horas tras la aplicación.</li><li>Evitar antiinflamatorios los días previos y posteriores, salvo indicación médica.</li><li>Seguir el programa de fisioterapia para potenciar los resultados.</li><li>Los resultados son progresivos: la mejoría suele notarse en las semanas siguientes.</li>',

      testi_tag: 'Testimonios',
      testi_title: 'Lo que dicen nuestros pacientes',
      testi1_text: 'Realmente una excelente atención, se siente que nos escucha, nos explica y su calidad humana contribuyen a la mejoría… tratamientos médicos muy acertados… gracias porque gracias a todo lo expuesto mi mamá hoy está bien.',
      testi2_text: 'Excelente médico. Sus tratamientos son confiables, seguros y efectivos. Es una excelente persona y profesional. Recomendado 100%. La persona que le asiste es excelente y la experiencia siempre es buena.',
      testi_role: 'Paciente',

      footer_desc: 'Es momento de calmar el dolor y mejorar tu calidad de vida. En Ortomesa estamos para ayudarte.',
      footer_contact_title: 'Contáctanos',
      footer_address: 'Cra 14 No. 8 Norte – 63, Edf. Cañaveral, Consultorio 401. Armenia, Quindío',
      footer_mobile: 'Móvil: +(57) 317 306 2308',
      footer_hours_title: 'Horario de atención',
      footer_mon: 'Lunes <span>8:00 am – 6:00 pm</span>',
      footer_tue: 'Martes <span>8:00 am – 6:00 pm</span>',
      footer_wed: 'Miércoles <span>8:00 am – 6:00 pm</span>',
      footer_thu: 'Jueves <span>8:00 am – 6:00 pm</span>',
      footer_fri: 'Viernes <span>8:00 am – 6:00 pm</span>',
      footer_copy: '&copy; 2026 Ortomesa – Consultorio Ortopédico Armenia &nbsp;·&nbsp; Desarrollado por <a href="https://vamosarayar.com/" target="_blank">Rayar</a>',

      meta_title: 'Ortomesa – Ortopedia Armenia',
      meta_description: 'Ortomesa – Consultorio ortopédico en Armenia, Quindío. Dr. Jorge Iván Mesa, especialista en cirugía de hombro, rodilla, ondas de choque y medicina regenerativa.'
    },

    en: {
      topbar_hours: 'Mon – Fri &nbsp;8:00 am – 5:00 pm',

      nav_home: 'Home',
      nav_about: 'About us',
      nav_services: 'Services',
      nav_testimonials: 'Testimonials',
      nav_cta: 'Book an appointment',

      hero_badge: 'Ortomesa Clinic · Armenia, Quindío',
      hero_title: '<em>Joint pain</em> treatment<br>with cutting-edge technology',
      hero_sub: 'At Ortomesa we have over 15 years of experience in orthopedic surgery, regenerative medicine and shockwave therapy to improve your quality of life.',
      hero_btn_cta: 'Book your appointment',
      hero_btn_more: 'Learn more',
      stat_years: 'years of experience',
      stat_procedures: 'procedures',
      stat_commitment: 'commitment',

      feat1_title: 'Pain treatment',
      feat1_text: 'Knee, shoulder, foot and elbow treated with advanced, minimally invasive methods.',
      feat2_title: 'Latest technology',
      feat2_text: 'Shockwave therapy and regenerative cells to improve your mobility without surgery.',
      feat3_title: 'Specialized surgery',
      feat3_text: 'Only when necessary, always evaluating all available alternatives.',

      about_tag: 'Our specialist',
      about_p1: 'Orthopedic surgeon with over 15 years of experience, responsible and committed to his patients and their families. In continuous medical and research training, with a strong social conscience and sense of belonging.',
      about_p2: 'Subspecialist in Shoulder and Knee Surgery, Arthroscopic Surgery and Sports Traumatology. Expert in Musculoskeletal Ultrasound (Francisco de Vitoria University, Madrid, Spain).',
      about_p3: 'Member of the International Society for Shockwave Therapy (ISWT) and former president of the Quindío Society of Orthopedics (SCCOT).',
      about_badge: 'successful<br>procedures',
      pill1: 'Shoulder &amp; Knee',
      pill2: 'Arthroscopy',
      pill3: 'Shockwave therapy',
      pill4: 'Regenerative Medicine',
      pill5: 'Sports traumatology',
      about_btn: 'Book a consultation',

      cta_title: "It's time to end the pain",
      cta_text: 'We have the knowledge, experience and certification to provide you with a therapy that will improve your quality of life.',
      cta_btn: 'Message us now',

      svc_tag: 'Our services',
      svc_title: 'How can we help you?',
      svc_sub: 'Specialized treatments in regenerative medicine, shockwave therapy and biological therapies to relieve your pain and restore your well-being.',
      svc1_title: 'Knee injury',
      svc1_text: 'Knee injuries are common and can affect people of all ages and activity levels.',
      svc2_title: 'Shoulder injury',
      svc2_text: "Shoulder injuries can be debilitating and significantly affect a person's quality of life.",
      svc3_title: 'Elbow injury',
      svc3_text: 'The elbow is susceptible to various injuries that limit forearm flexion, extension and rotation.',
      svc4_title: 'Foot injury',
      svc4_text: "Foot injuries can severely affect a person's mobility and quality of life.",
      svc5_title: 'Shockwave therapy',
      svc5_text: 'A non-invasive technique that uses high-energy acoustic waves to stimulate healing and reduce pain.',
      svc6_title: 'Regenerative cells',
      svc6_text: "Repairs damaged tissue and stimulates the body's natural regeneration using your own biological resources.",

      svc_more: 'Learn more',
      modal_treatment_label: 'Treatment',
      modal_recovery_label: 'Recovery recommendations',
      modal_disclaimer: 'This information is a general guide: every case is individually assessed in consultation.',
      modal_cta: 'Book your assessment',

      svc1_modal_desc: 'The knee is one of the most complex and heavily loaded joints in the body. Injuries such as meniscus tears, cruciate ligament injuries, chondromalacia and osteoarthritis can cause pain, swelling and instability, limiting activities as basic as walking or climbing stairs.',
      svc1_modal_treatment: '<li>Specialized assessment with musculoskeletal ultrasound for an accurate diagnosis.</li><li>Pain management with regenerative medicine (platelet-rich plasma and regenerative cells).</li><li>Shockwave therapy for tendinopathies and chronic injuries.</li><li>Minimally invasive arthroscopic surgery when the case requires it.</li>',
      svc1_modal_recovery: '<li>Follow the prescribed physiotherapy and muscle-strengthening plan.</li><li>Keep a healthy body weight to reduce the load on the joint.</li><li>Avoid high-impact activities during the recovery phase.</li><li>Apply local cold and respect the prescribed rest periods.</li><li>Attend follow-up visits so the treatment can be adjusted as you progress.</li>',

      svc2_modal_desc: 'The shoulder has the widest range of motion of any joint in the body, which makes it vulnerable to injuries such as rotator cuff tears, tendinitis, bursitis, dislocations and instability. These conditions cause night pain and difficulty with everyday activities.',
      svc2_modal_treatment: '<li>In-office diagnosis with musculoskeletal ultrasound.</li><li>Ultrasound-guided injections and regenerative medicine for tendinopathies.</li><li>Shockwave therapy for calcifications and chronic tendinitis.</li><li>Shoulder arthroscopy for rotator cuff repair and instability.</li>',
      svc2_modal_recovery: '<li>Do the prescribed mobility and progressive strengthening exercises.</li><li>Avoid lifting weight or overhead movements during the first weeks.</li><li>Keep good posture and take active breaks at work.</li><li>Wear the sling for the indicated time in case of surgery.</li><li>Do not stop rehabilitation even if the pain improves.</li>',

      svc3_modal_desc: "The elbow is involved in almost every movement of the arm and hand. Injuries such as epicondylitis (tennis elbow), golfer's elbow, bursitis and nerve entrapments cause pain that limits grip strength and work or sports activity.",
      svc3_modal_treatment: '<li>Clinical and ultrasound evaluation to identify the affected tissue.</li><li>Shockwave therapy, the treatment of choice for chronic epicondylitis.</li><li>Platelet-rich plasma to stimulate tendon repair.</li><li>Surgery in selected cases that do not respond to conservative treatment.</li>',
      svc3_modal_recovery: '<li>Temporarily modify the activities that trigger the pain.</li><li>Do eccentric strengthening exercises as prescribed.</li><li>Use an epicondylitis strap if recommended by the specialist.</li><li>Correct your sports technique or workplace ergonomics to prevent relapses.</li>',

      svc4_modal_desc: 'The foot bears the entire weight of the body with every step. Conditions such as plantar fasciitis, heel spurs, Achilles tendinopathy, sprains and metatarsalgia cause pain that alters gait and quality of life.',
      svc4_modal_treatment: '<li>Ultrasound diagnosis of fascia, tendons and ligaments.</li><li>Shockwave therapy for plantar fasciitis and heel spurs.</li><li>Regenerative medicine for Achilles tendinopathy and chronic injuries.</li><li>Comprehensive management with footwear and insole recommendations.</li>',
      svc4_modal_recovery: '<li>Wear footwear with good support and cushioning.</li><li>Stretch the plantar fascia and calf muscles daily.</li><li>Avoid walking barefoot on hard surfaces during recovery.</li><li>Return to sports gradually and progressively.</li>',

      svc5_modal_desc: 'A non-invasive technology that applies high-energy acoustic waves to the injured tissue, stimulating the formation of new blood vessels, tissue regeneration and pain reduction. It is internationally endorsed for multiple musculoskeletal conditions.',
      svc5_modal_treatment: '<li>Outpatient sessions of 15 to 20 minutes, with no anesthesia or downtime.</li><li>Performed in cycles of 3 to 5 sessions depending on the condition.</li><li>Indicated for plantar fasciitis, epicondylitis, calcific shoulder tendinitis and Achilles tendinopathy, among others.</li><li>Applied by a specialist member of the International Society for Shockwave Therapy (ISWT).</li>',
      svc5_modal_recovery: '<li>Mild discomfort or temporary redness after the session is normal.</li><li>Avoid anti-inflammatory drugs in the following days (they interfere with the regenerative effect), unless medically indicated.</li><li>Keep relative rest from sports between sessions.</li><li>Complete the full cycle of sessions: the effect is cumulative and progressive.</li>',

      svc6_modal_desc: "Regenerative medicine uses the patient's own biological resources — such as platelet-rich plasma and cell concentrates — to repair damaged tissue, reduce inflammation and slow the progression of joint wear, avoiding or postponing surgery.",
      svc6_modal_treatment: '<li>The sample is taken from the patient and prepared during the same procedure.</li><li>Precise, ultrasound-guided application into the affected joint or tendon.</li><li>Outpatient procedure with minimal discomfort.</li><li>Indicated for osteoarthritis, cartilage injuries, tendinopathies and muscle injuries.</li>',
      svc6_modal_recovery: '<li>Relative rest for 24 to 72 hours after the application.</li><li>Avoid anti-inflammatory drugs in the days before and after, unless indicated.</li><li>Follow the physiotherapy program to enhance the results.</li><li>Results are progressive: improvement is usually noticed over the following weeks.</li>',

      testi_tag: 'Testimonials',
      testi_title: 'What our patients say',
      testi1_text: 'Truly excellent care — you can feel that he listens to us and explains everything, and his human warmth contributes to recovery… very accurate medical treatments… thank you, because thanks to all of this my mother is doing well today.',
      testi2_text: 'Excellent doctor. His treatments are reliable, safe and effective. He is an excellent person and professional. 100% recommended. His assistant is excellent and the experience is always a good one.',
      testi_role: 'Patient',

      footer_desc: "It's time to relieve the pain and improve your quality of life. At Ortomesa we are here to help you.",
      footer_contact_title: 'Contact us',
      footer_address: 'Cra 14 No. 8 Norte – 63, Cañaveral Building, Office 401. Armenia, Quindío',
      footer_mobile: 'Mobile: +(57) 317 306 2308',
      footer_hours_title: 'Office hours',
      footer_mon: 'Monday <span>8:00 am – 6:00 pm</span>',
      footer_tue: 'Tuesday <span>8:00 am – 6:00 pm</span>',
      footer_wed: 'Wednesday <span>8:00 am – 6:00 pm</span>',
      footer_thu: 'Thursday <span>8:00 am – 6:00 pm</span>',
      footer_fri: 'Friday <span>8:00 am – 6:00 pm</span>',
      footer_copy: '&copy; 2026 Ortomesa – Orthopedic Clinic Armenia &nbsp;·&nbsp; Developed by <a href="https://vamosarayar.com/" target="_blank">Rayar</a>',

      meta_title: 'Ortomesa – Orthopedics Armenia',
      meta_description: 'Ortomesa – Orthopedic clinic in Armenia, Quindío. Dr. Jorge Iván Mesa, specialist in shoulder and knee surgery, shockwave therapy and regenerative medicine.'
    }
  };

  /* Diccionario accesible para otros scripts (modal de servicios) */
  window.ORTOMESA_I18N = I18N;

  var STORAGE_KEY = 'ortomesa-lang';

  function setLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
    document.title = dict.meta_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict.meta_description);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  /* Restaurar idioma guardado (el HTML ya está en español) */
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* modo privado */ }
  if (saved === 'en') setLang('en');

});
