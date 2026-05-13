import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function GulfShoresRentalWebsite() {
const [bookedDates, setBookedDates] = useState([]);

useEffect(() => {
  fetch('/api/calendar')
    .then((response) => response.json())
    .then((data) => {
      setBookedDates(data.bookedDates || []);
    })
    .catch(() => {
      setBookedDates([]);
    });
}, []);
  const calendarMonths = [
    { month: 'April 2026', daysInMonth: 30, startDay: 3, monthNumber: 4 },
    { month: 'May 2026', daysInMonth: 31, startDay: 5, monthNumber: 5 },
    { month: 'June 2026', daysInMonth: 30, startDay: 1, monthNumber: 6 },
    { month: 'July 2026', daysInMonth: 31, startDay: 3, monthNumber: 7 },
    { month: 'August 2026', daysInMonth: 31, startDay: 6, monthNumber: 8 }
  ];

  const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [calendarStartIndex, setCalendarStartIndex] = useState(0);
  const visibleMonths = calendarMonths.slice(calendarStartIndex, calendarStartIndex + 2);

  const images = {
  heroSunset: '/images/gulf-shores-living/View of the bay.jpg',

  deckLoungers: '/images/gulf-shores-living/Beach chairs.jpg',

  privateDock: '/images/gulf-shores-living/IMG_5599.jpg',

  livingRoom: '/images/gulf-shores-living/Living Room Area.jpg',

  kitchen: '/images/gulf-shores-living/Dining Room.jpg',

  masterBedroom: '/images/gulf-shores-living/Master bed.jpg'
};

  const highlights = [
    'Waterfront on the lagoon',
    'Private dock and pier access',
    'Great for fishing and relaxing',
    'Quiet setting in Gulf Shores',
    'Only about 5.5 miles to the beach',
    'Pet friendly'
  ];

  const amenities = [
    'Sleeps 7',
    '3 Bedrooms',
    '2 Full Bathrooms',
    'King primary suite',
    '2 Queen guest rooms',
    'Sleeper sofa',
    'Wi-Fi',
    'Smart TVs in all bedrooms',
    'Full kitchen',
    'Washer & dryer',
    'Parking',
    'Grill',
    'Water & beach toys',
    'Pet friendly'
  ];

  const gallery = [
    {
      title: 'Waterfront Views',
      image: images.heroSunset,
      text: 'Big lagoon views that make mornings, afternoons, and sunsets feel like part of the stay.'
    },
    {
      title: 'Deck & Outdoor Space',
      image: images.deckLoungers,
      text: 'A large waterfront deck with room to lounge, relax, and enjoy the breeze.'
    },
    {
      title: 'Private Dock',
      image: images.privateDock,
      text: 'Private dock and pier access that make this home ideal for fishing and waterfront downtime.'
    },
    {
      title: 'Living Area',
      image: images.livingRoom,
      text: 'Bright, open living spaces with comfortable seating and easy access to the deck.'
    },
    {
      title: 'Kitchen',
      image: images.kitchen,
      text: 'Clean, spacious kitchen with plenty of prep space for family meals and longer stays.'
    },
    {
      title: 'Primary Bedroom',
      image: images.masterBedroom,
      text: 'King bedroom with water views, patio access, and a private ensuite bath.'
    }
  ];

  const isBooked = (monthNumber, day) => {
    const formatted = `2026-${String(monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return bookedDates.includes(formatted);
  };

  const renderCalendarDays = (daysInMonth, startDay, monthNumber) => {
    const cells = [];

    for (let i = 0; i < startDay; i += 1) {
      cells.push(
        <div key={`empty-${monthNumber}-${i}`} className="aspect-square rounded-2xl bg-slate-100/70" />
      );
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const booked = isBooked(monthNumber, day);
      cells.push(
        <div
          key={`${monthNumber}-${day}`}
          className={`aspect-square rounded-2xl border p-3 text-sm font-semibold flex items-start justify-end ${
            booked
              ? 'border-rose-200 bg-rose-50 text-rose-700'
              : 'border-emerald-200 bg-emerald-50 text-emerald-700'
          }`}
        >
          <span>{day}</span>
        </div>
      );
    }

    return cells;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-cyan-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
                Gulf Shores, Alabama Waterfront Rental
              </p>

              <div className="mt-5 space-y-5">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] font-serif italic drop-shadow-sm">
                  Gulf Shores Living
                </h1>
                <div className="mt-2 text-lg sm:text-xl lg:text-2xl font-light tracking-[0.22em] uppercase text-sky-700">
                  Private Waterfront Escape
                </div>
              </div>

              <p className="mt-4 text-xl text-slate-700 sm:text-2xl">
                Private waterfront getaway with dock, fishing, and peaceful lagoon views.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Escape the crowds and enjoy a quiet stay on the water with a private dock, easy beach access,
                and everything you need for a relaxing Gulf Shores trip. Gulf Shores Living combines lagoon-front
                comfort with quick access to the beach, dining, golf, and top local attractions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#availability" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
                  Book Your Stay
                </a>
                <a href="#gallery" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:scale-[1.02]">
                  View Photos
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Sleeps 7</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">3 Bedrooms</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">2 Full Baths</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Pet Friendly</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Private Dock</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl ring-1 ring-slate-200">
              <img
                src={images.heroSunset}
                alt="Sunset charcuterie and drinks overlooking the lagoon at Gulf Shores Living"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Why guests love it</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">A quiet waterfront stay with room to unwind</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Quick facts</p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-slate-300">Location</span>
                <a href="https://maps.google.com/?q=15672+State+Highway+180+Gulf+Shores+AL" target="_blank" rel="noreferrer" className="font-medium underline decoration-sky-400 underline-offset-4">
                  Open Map
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-300">Beach access</span>
                <span className="font-medium">About 5.5 miles</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-slate-300">Best for</span>
                <span className="font-medium">Families & fishing trips</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Nearby</span>
                <span className="font-medium">The Wharf, beach, golf</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="availability" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Availability calendar</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">See booked dates before you reserve</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                This calendar shows two months at a time. Use the buttons to browse upcoming availability. For the most accurate live availability, call, text, or book through Airbnb or Vrbo.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-700 ring-1 ring-emerald-200">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                Available
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-rose-700 ring-1 ring-rose-200">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                Booked
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setCalendarStartIndex(Math.max(0, calendarStartIndex - 1))}
              disabled={calendarStartIndex === 0}
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold disabled:opacity-40"
            >
              ‹ Previous Months
            </button>
            <button
              onClick={() => setCalendarStartIndex(Math.min(calendarMonths.length - 2, calendarStartIndex + 1))}
              disabled={calendarStartIndex >= calendarMonths.length - 2}
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold disabled:opacity-40"
            >
              Next Months ›
            </button>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {visibleMonths.map((month) => (
              <div key={month.month} className="rounded-[2rem] bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">{month.month}</h3>
                <div className="mt-6 grid grid-cols-7 gap-2">
                  {weekdayLabels.map((label) => (
                    <div key={`${month.month}-${label}`} className="pb-2 text-center text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {label}
                    </div>
                  ))}
                  {renderCalendarDays(month.daysInMonth, month.startDay, month.monthNumber)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-sky-50 p-8 ring-1 ring-sky-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Plan your stay</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">See dates you like? Reach out before they fill.</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Use the availability calendar above as a quick guide, then call, text, or book through Airbnb or Vrbo to secure your preferred dates.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="tel:2513228464" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">Call or Text to Book</a>
              <a href="#book" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">View Booking Options</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">About the property</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Relaxed Gulf Shores comfort on the lagoon</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Gulf Shores Living is a waterfront house designed for laid-back getaways, fishing trips, family vacations, and long weekends by the water. The open layout, big windows, and expansive deck keep the lagoon front and center throughout the stay, while the private dock gives guests a quiet, easy way to enjoy one of the best parts of the property.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Inside, the home sleeps 7 with a king primary suite, two queen guest rooms, and a sleeper sofa. The primary bedroom includes water views, patio access, and an ensuite full bath. Guests also enjoy smart TVs in all bedrooms, a full kitchen, washer and dryer, and a pet-friendly setup that makes the house easy for real trips, not just quick overnights.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Included amenities</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {amenities.map((amenity) => (
                  <div key={amenity} className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-slate-200 shadow-sm ring-1 ring-slate-200">
            <img src={images.masterBedroom} alt="Primary bedroom with king bed and water views" className="h-full min-h-[420px] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Sleeping arrangements</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Comfortable space for families and small groups</h2>
            <div className="mt-8 space-y-4 text-lg text-slate-600">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><strong className="text-slate-900">Primary Bedroom:</strong> King bed, ensuite bathroom, patio access, and water views</div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><strong className="text-slate-900">Bedroom 2:</strong> Queen bed</div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><strong className="text-slate-900">Bedroom 3:</strong> Queen bed</div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"><strong className="text-slate-900">Living Room:</strong> Sleeper sofa for additional flexibility</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Waterfront lifestyle</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Private dock, fishing, and open lagoon views</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                The private dock and pier are a big part of what makes this home special. Spend the day fishing, enjoying the water, or just relaxing on the deck with a drink while the sun drops over the lagoon.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-sm text-slate-300">Feature</div><div className="mt-2 font-semibold">Private dock</div></div>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-sm text-slate-300">Feature</div><div className="mt-2 font-semibold">Fishing friendly</div></div>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-sm text-slate-300">Feature</div><div className="mt-2 font-semibold">Quiet waterfront setting</div></div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 sm:col-span-2"><img src={images.privateDock} alt="Private dock at Gulf Shores Living" className="h-64 w-full object-cover" /></div>
              <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"><img src={images.deckLoungers} alt="Deck loungers overlooking the water" className="h-48 w-full object-cover" /></div>
              <div className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"><img src={images.heroSunset} alt="Waterfront sunset view" className="h-48 w-full object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Photo gallery</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">See the property before you arrive</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Location</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Close to the beach and Gulf Shores favorites</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Gulf Shores Living gives guests a peaceful waterfront setting without putting them far from the action. The beach is about 5.5 miles away, and popular spots like The Wharf, Waterville, The Hangout, and Peninsula Golf are all within easy reach.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Nearby highlights</h3>
              <div className="mt-6 space-y-3 text-slate-600">
                <a href="https://alwharf.com" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 hover:shadow-md transition"><strong>The Wharf</strong><br /><span className="text-sm text-slate-500">Dining, shopping & entertainment</span></a>
                <a href="https://www.peninsulagolfclub.com" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 hover:shadow-md transition"><strong>Peninsula Golf</strong><br /><span className="text-sm text-slate-500">27-hole championship golf</span></a>
                <a href="https://watervilleusa.com" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 hover:shadow-md transition"><strong>Waterville USA</strong><br /><span className="text-sm text-slate-500">Waterpark & family fun</span></a>
                <a href="https://www.thehangout.com" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 hover:shadow-md transition"><strong>The Hangout</strong><br /><span className="text-sm text-slate-500">Iconic Gulf Shores dining</span></a>
                <a href="https://www.gulfshores.com/things-to-do/beaches" target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 hover:shadow-md transition"><strong>Gulf Beaches</strong><br /><span className="text-sm text-slate-500">White sand beaches about 5.5 miles away</span></a>
                <div className="rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200"><strong>Lagoon Front Setting</strong><br /><span className="text-sm text-slate-500">Quiet waterfront relaxation at the property</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-white shadow-2xl lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Book your stay</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Choose how you want to book</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                You can book directly by phone or choose to complete your reservation through Airbnb or Vrbo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:2513228464" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">Call or Text 251-322-8464</a>
                <a href="https://www.airbnb.com/rooms/1439815947286857449" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">Book on Airbnb</a>
                <a href="https://www.vrbo.com/4616215" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">Book on Vrbo</a>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-sm">
              <h3 className="text-xl font-semibold">Booking Information</h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <p><strong>Call or Text:</strong><br /><a href="tel:2513228464" className="font-semibold text-slate-900">251-322-8464</a></p>
                <p><strong>Booking Options:</strong><br />Reserve directly by phone or book securely through Airbnb or Vrbo.</p>
                <p><strong>Property Features:</strong><br />Waterfront • Private Dock • Sleeps 7 • Pet Friendly</p>
                <p><strong>Stay Details:</strong><br />Contact for rates, minimum stays, seasonal availability, and pet policy.</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-medium text-slate-900">Have questions before booking?</p>
                  <p className="mt-2 text-sm">We’re happy to help with dates, fishing info, beach access, and local recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Gulf Shores Living. All rights reserved.</p>
          <p>Waterfront rental website built for direct bookings, photo-driven marketing, and Gulf Shores vacation stays.</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<GulfShoresRentalWebsite />);
