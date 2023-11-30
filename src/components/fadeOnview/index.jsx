import { easeInOut, motion } from "framer-motion";

const FadeOnView = ({ className, children, fadeDuration = 0.7 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: fadeDuration, ease: easeInOut }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeOnView;
