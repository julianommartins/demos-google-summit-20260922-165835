import Head from 'next/head';
import styles from '../styles/Home.module.css';

const CREATED_BY = 'Kiro, Auto';

const TIMELINE_STEPS = [
  {
    number: 1,
    title: 'Criar a aplicação',
    description: 'A application nasce no namespace demos e já traz seu repositório.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Conectar o repositório',
    description: 'A nullplatform cria o repo no GitHub e injeta as credenciais do CI.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Criar o Scope',
    description: 'Um scope Development define onde e como a aplicação roda.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Disparar o Build',
    description: 'O push na branch principal aciona o CI e publica a imagem.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Executar o Deploy',
    description: 'O release vai para o scope e a infraestrutura sobe sozinha.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    number: 6,
    title: 'Release em produção 🎉',
    description: 'URL pública servida em *.bra.nullapps.io.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Alô Google Summit!</title>
        <meta name="description" content="Um deploy real feito pela nullplatform — do zero à produção." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="hero-title">
          <h1 id="hero-title" className={styles.heroTitle}>
            Alô Google Summit!
          </h1>
          <p className={styles.heroSubtitle}>
            Um deploy real feito pela nullplatform — do zero à URL pública em minutos.
          </p>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection} aria-labelledby="timeline-title">
          <h2 id="timeline-title" className={styles.timelineTitle}>
            Do zero à produção
          </h2>
          <ol className={styles.timeline} aria-label="Passos do deploy">
            {TIMELINE_STEPS.map((step) => (
              <li key={step.number} className={styles.step}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepConnector} aria-hidden="true" />
                <div className={styles.stepContent}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.signature}>{`Criada com ${CREATED_BY}`}</p>
      </footer>
    </>
  );
}
