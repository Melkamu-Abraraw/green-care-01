"use client";

import { useEffect, useRef, useState } from "react";
import Rating, { starPath } from "@/components/Rating";

const SAVED_DETAILS_KEY = "green-care-review-details";
const fieldClass =
  "mt-1 block w-full border border-ink/25 bg-transparent px-3 py-3 outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";

function RequiredMark() {
  return <span aria-hidden="true"> *</span>;
}

// Browsers can block storage, for example in private windows. Saved details are only a convenience.
function readSavedDetails() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_DETAILS_KEY));
  } catch {
    return null;
  }
}

function writeSavedDetails(details) {
  try {
    if (details) localStorage.setItem(SAVED_DETAILS_KEY, JSON.stringify(details));
    else localStorage.removeItem(SAVED_DETAILS_KEY);
  } catch {}
}

// The fields are uncontrolled, so saved details can be filled in after hydration.
function fillSavedDetails(form) {
  const saved = readSavedDetails();
  if (!saved) return;

  form.elements.name.value = saved.name;
  form.elements.email.value = saved.email;
  form.elements.saveDetails.checked = true;
}

function RatingInput({ value, onChange }) {
  const [hoveredValue, setHoveredValue] = useState(0);
  const shownValue = hoveredValue || value;

  return (
    <fieldset>
      <legend>
        Your rating
        <RequiredMark />
      </legend>
      <div className="mt-1 flex gap-1" onPointerLeave={() => setHoveredValue(0)}>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} onPointerEnter={() => setHoveredValue(star)} className="cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={star}
              required
              checked={value === star}
              onChange={() => onChange(star)}
              className="peer sr-only"
            />
            <span className="sr-only">
              {star} {star === 1 ? "star" : "stars"}
            </span>
            <svg
              className={`size-6 fill-current outline-offset-2 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-ink ${star <= shownValue ? "text-brand-gold" : "text-ink/15"}`}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d={starPath} />
            </svg>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function ReviewForm({ onAddReview }) {
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    fillSavedDetails(formRef.current);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const text = form.elements.review.value.trim();

    if (!name || !text) {
      setStatus("Please fill in your name and review.");
      return;
    }

    onAddReview({ name, rating, text, date: new Date().toLocaleDateString() });
    writeSavedDetails(form.elements.saveDetails.checked ? { name, email } : null);
    form.reset();
    fillSavedDetails(form);
    setRating(0);
    setStatus("Thanks for your review.");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-3 space-y-4">
      <RatingInput value={rating} onChange={setRating} />
      <label className="block">
        Your review
        <RequiredMark />
        <textarea name="review" rows={8} required className={fieldClass} />
      </label>
      <label className="block">
        Name
        <RequiredMark />
        <input type="text" name="name" autoComplete="name" required className={fieldClass} />
      </label>
      <label className="block">
        Email
        <RequiredMark />
        <input type="email" name="email" autoComplete="email" required className={fieldClass} />
      </label>
      <label className="flex items-start gap-2">
        <input type="checkbox" name="saveDetails" className="mt-2 size-4 shrink-0" />
        Save my name and email in this browser for the next time I review.
      </label>
      <button
        type="submit"
        className="bg-brand-green px-12 py-4 font-(family-name:--font-montserrat) text-sm font-medium tracking-[0.15em] text-brand-white uppercase transition-colors hover:bg-brand-gold hover:text-brand-dark"
      >
        Submit
      </button>
      <p role="status" className="text-base empty:hidden">
        {status}
      </p>
    </form>
  );
}

// Reviews are kept in memory, so a refresh clears them until the form is connected to a backend.
export default function ProductReviews({ reviews, onAddReview }) {
  return (
    <div>
      {reviews.length === 0 ? (
        <p>There are no reviews yet.</p>
      ) : (
        <ul className="space-y-5">
          {reviews.map((review, index) => (
            <li key={index}>
              <Rating value={review.rating} />
              <p className="mt-1 text-base">
                <span className="font-semibold">{review.name}</span>
                <span className="opacity-60"> · {review.date}</span>
              </p>
              <p className="mt-1 whitespace-pre-line">{review.text}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Important overrides the serif set on all headings in globals.css. */}
      <h2 className="mt-8 font-(family-name:--font-montserrat)! text-xl font-light tracking-[0.08em] uppercase">
        Add a review
      </h2>
      <ReviewForm onAddReview={onAddReview} />
    </div>
  );
}
