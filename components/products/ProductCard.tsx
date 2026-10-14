import { ArrowUpRight, Layers3, Plus } from 'lucide-react';
import { BrandMark } from '@/components/home/Brand';
import { whatsappLink } from '@/lib/contact';
import type { Product } from '@/lib/products';
import styles from './products.module.css';

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article id={product.id} className={`${styles.card} ${styles[product.tone]}`} aria-labelledby={`${product.id}-title`}>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.artMeta}><span>MTS / {String(index + 1).padStart(2, '0')}</span><span>{product.label}</span></div>
        <div className={styles.orbit} />
        <div className={styles.symbol}>
          {product.tone === 'blue' ? <BrandMark /> : <Layers3 strokeWidth={1.3} />}
        </div>
        <span className={styles.artName}>{product.name}</span>
        <span className={styles.artCaption}>{product.creators.join(' + ')}</span>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.eyebrow}>{product.label}</span>
        <h2 id={`${product.id}-title`}>{product.name}</h2>
        <p>{product.description}</p>
        <div className={styles.creators}>
          <span>{product.creators.length > 1 ? 'Criado em conjunto por' : 'Desenvolvido por'}</span>
          <div>{product.creators.map((creator, creatorIndex) => (
            <span key={creator}>
              {creatorIndex > 0 && <Plus size={13} aria-hidden="true" />}
              <strong>{creator}</strong>
            </span>
          ))}</div>
        </div>
        <a
          className={styles.productLink}
          href={product.productionUrl ?? whatsappLink(`Olá! Quero conhecer o ${product.name}. Podem me contar mais sobre o produto?`)}
          target="_blank"
          rel="noopener noreferrer"
          data-contact-location="products"
        >
          {product.productionUrl ? `Conhecer o ${product.name}` : `Falar sobre o ${product.name}`} <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
