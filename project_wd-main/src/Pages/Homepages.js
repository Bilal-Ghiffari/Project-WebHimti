import React from 'react'
import Navbar from 'Parts/Navbar';
import Header from 'Homepage/Header';
import BeritaHimti from 'Homepage/BeritaHimti';
import EventHimti from 'Homepage/EventHimti';
import useModal from 'Hooks/useModal';
import ApiHomePages from 'mockup-API/Api-Homepage.json';
import Footer from 'Homepage/Footer';

export default function Homepages() {
    useModal();
    return (
        <>
            <Navbar theme="white" position="absolute" />
            <Header />
            <BeritaHimti />
            <EventHimti data={ApiHomePages.event} />
            <Footer />
        </>
    )
}
