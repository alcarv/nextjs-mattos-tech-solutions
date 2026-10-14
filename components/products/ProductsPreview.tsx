import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { productCatalog } from '@/lib/products';
import styles from './products.module.css';

export default function ProductsPreview() {
  return (
    <section className={styles.preview} aria-labelledby="home-products-title">
      <div className="mts-container">
        <div className={styles.previewHeader}>
          <div><span className="mts-section-number">PRODUTOS / MATTOS TECH SOLUTIONS</span><h2 id="home-products-title">Tecnologia que também vira produto.</h2></div>
          <Link href="/produtos">Conhecer os produtos <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className={styles.previewGrid}>
          {productCatalog.map((product) => (
            <Link key={product.id} href={`/produtos#${product.id}`} className={`${styles.previewCard} ${styles[product.tone]}`}>
              <div><span className={styles.eyebrow}>{product.label}</span><h3>{product.name}</h3><p>{product.creators.join(' + ')}</p></div>
              <ArrowUpRight size={24} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
