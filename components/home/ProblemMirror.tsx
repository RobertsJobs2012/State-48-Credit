'use client';

import { motion } from 'motion/react';
import { FileX, TrendingDown, DollarSign, Clock, ShieldAlert, MessageSquareX } from 'lucide-react';

const problems = [
  {
    icon: <FileX size={24} className="text-copper-default" />,
    title: 'You Got Denied Again',
    description: 'You applied for a mortgage, a car loan, or a credit card — and got the rejection letter. Again. That "insufficient credit history" or "derogatory marks" response hits different every time.',
  },
  {
    icon: <TrendingDown size={24} className="text-copper-default" />,
    title: 'Your Score Keeps Going the Wrong Direction',
    description: 'Every month you check and it\'s the same number — or worse. You\'ve tried disputing things yourself and hit a wall. The bureaus seem to be working against you, not for you.',
  },
  {
    icon: <DollarSign size={24} className="text-copper-default" />,
    title: 'You\'re Paying Way Too Much in Interest',
    description: 'Because of your credit score, lenders charge you more. Way more. Every car payment, every loan, every credit card — you\'re handing over thousands of dollars extra that people with good credit never have to pay.',
  },
  {
    icon: <Clock size={24} className="text-copper-default" />,
    title: 'You Tried Another Company and Got Nothing',
    description: 'You signed up. You paid every month. You waited. And then waited some more. They cashed your checks and gave you excuses. Now you\'re skeptical — and honestly, that\'s fair.',
  },
  {
    icon: <ShieldAlert size={24} className="text-copper-default" />,
    title: 'Someone Stole Your Identity',
    description: 'You didn\'t do anything wrong. Someone opened accounts in your name, ran up balances, and disappeared — leaving you to clean up the mess. You\'ve been fighting a battle you didn\'t start.',
  },
  {
    icon: <MessageSquareX size={24} className="text-copper-default" />,
    title: 'You Feel Like Nobody Will Give You a Straight Answer',
    description: 'Every company you talk to has fine print, monthly fees, and vague promises. Nobody tells you what they can actually do, how long it will actually take, or what it will actually cost. You just want someone honest.',
  },
];

export function ProblemMirror() {
  return (
    <section className="py-24 bg-alt-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-headline mb-6"
          >
            Does Any of This Sound Familiar?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            If it does, you are not alone — and you are not stuck.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:border-border-strong transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-sunken flex items-center justify-center mb-6 border border-border-default">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-headline mb-4">{problem.title}</h3>
              <p className="text-text-secondary leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl text-text-lifted font-medium leading-relaxed">
            Here is the truth: your credit didn&apos;t get here overnight, and the credit bureaus, the creditors, and the big credit repair mills have no interest in fixing it fast. <span className="text-turquoise-default">But we do. And we know exactly how.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
