"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

export function FooterSection() {
    const footerRef = useRef(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(footerRef, { once: true, margin: "-100px" });

    // Form state
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.message) {
            setSubmitStatus({
                success: false,
                message: 'Please fill in all fields'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Use environment variables instead of hardcoded values
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            if (result.text === 'OK') {
                setSubmitStatus({
                    success: true,
                    message: 'Your message has been sent successfully!'
                });
                // Reset form
                setFormData({ email: '', message: '' });
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus({
                success: false,
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            ),
            url: "https://github.com/chaxmikara"
        },
        {
            name: "LinkedIn",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            ),
            url: "https://www.linkedin.com/in/chamikara-kodithuwakku-5a1532292"
        },
        {
            name: "Facebook",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
            ),
            url: "https://www.facebook.com/chamikara.dimuth"
        },
        {
            name: "Instagram",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
            ),
            url: "https://www.instagram.com/cham.i_.xx/"
        },
    ];

    const contactInfo = [
        {
            name: "Email",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
            ),
            value: "chamikaradimuth22@gmail.com",
            url: "mailto:chamikaradimuth22@gmail.com"
        },
        {
            name: "Phone",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
            ),
            value: "(+94) 710450999",
            url: "tel:+94710450999"
        },
    ];

    const quickLinks = [
        { name: "Home", url: "#" },
        { name: "About", url: "#about" },
        { name: "Projects", url: "#projects" },
        { name: "Skills", url: "#skills" },
        { name: "Contact", url: "#contact" },
    ];

    return (
        <footer id="contact" className="bg-black dark:bg-black text-white" ref={footerRef}>
            <div className="container mx-auto px-6 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {/* About Section */}
                    <motion.div variants={itemVariants} className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <p className="text-gray-300">
                            I'm a passionate full-stack developer dedicated to creating exceptional digital experiences with cutting-edge technologies.
                        </p>
                        <div className="flex space-x-3 mt-4 flex-wrap">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full hover:text-primary transition duration-300 mb-2"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-bold">Quick Links</h2>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.url}
                                        className="text-gray-300 hover:text-primary transition duration-300 flex items-center"
                                    >
                                        <span className="mr-2">→</span> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-bold">Contact Me</h2>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <div className="bg-gray-800 p-2 rounded-full">
                                        {info.icon}
                                    </div>
                                    <a
                                        href={info.url}
                                        className="text-gray-300 hover:text-primary transition duration-300"
                                    >
                                        {info.value}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email"
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    rows={3}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                ></textarea>

                                {submitStatus && (
                                    <div className={`p-2 rounded ${submitStatus.success ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'}`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full bg-primary hover:bg-primary/90 px-6 py-2 rounded font-medium text-black dark:text-black ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400"
                >
                    <p>© {new Date().getFullYear()} Chamikara Kodithuwakku. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}
