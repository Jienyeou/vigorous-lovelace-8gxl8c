import React, { useState, useEffect } from "react";
import {
  Shield,
  Activity,
  CheckCircle,
  ArrowRight,
  Upload,
  FileText,
  Menu,
  X,
  BarChart3,
  Users,
  AlertCircle,
  Clock,
  Cpu,
} from "lucide-react";

// ==========================================
// 👇 CHANGE THIS TO YOUR EMAIL ADDRESS 👇
// ==========================================
const YOUR_EMAIL = "jienyeou@gmail.com";

export default function App() {
  const [view, setView] = useState("landing"); // 'landing' | 'register' | 'success'

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar setView={setView} />

      {view === "landing" && <LandingPage setView={setView} />}
      {view === "register" && <RegistrationForm setView={setView} />}
      {view === "success" && <SuccessView setView={setView} />}

      <Footer />
    </div>
  );
}

// --- Navigation ---
function Navbar({ setView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-slate-800 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setView("landing")}
        >
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            GS <span className="text-blue-500">Algo</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Process
          </a>
          <button
            onClick={() => setView("register")}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            Start Application
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300"
          >
            Features
          </a>
          <button
            onClick={() => {
              setView("register");
              setMobileMenuOpen(false);
            }}
            className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
          >
            Start Application
          </button>
        </div>
      )}
    </nav>
  );
}

// --- Landing Page ---
function LandingPage({ setView }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Investors
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Consistent Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Over High Risk
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automated quantitative trading system delivering consistent,
            transparent returns through sophisticated algorithmic strategies.
            Managed by GS Algo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setView("register")}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
            >
              Start Growing Your Capital
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              {
                label: "Average Annual Return",
                value: "82 %",
                color: "text-emerald-400",
              },
              { label: "Profit Factor", value: "2.05", color: "text-blue-400" },
              { label: "Win Rate", value: "69%", color: "text-indigo-400" },
              {
                label: "Max Drawdown",
                value: "18.5%",
                color: "text-purple-400",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Institutional Investors Choose GS Algo
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our system handles small losses and frequent small wins to produce
              a smooth overall account growth curve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-500" />}
              title="Institutional-Grade Risk"
              desc="We strictly control lot sizing relative to account equity and use progressive grid steps to minimize exposure."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-indigo-500" />}
              title="24/5 Market Coverage"
              desc="The algorithm operates continuously during market hours without fatigue, monitoring opportunities around the clock."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-emerald-500" />}
              title="Emotion-Free Execution"
              desc="Removes human psychological biases like fear and greed. We execute purely on mathematical signals."
            />
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Power of Compounding
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Small consistent wins add up to massive results over time. See
              what your capital could look like after just 12 months.
            </p>
            <ul className="space-y-4">
              {[
                "RM 5,000 → RM 8,100 (+62%)",
                "RM 10,000 → RM 16,200 (+62%)",
                "RM 50,000 → RM 81,000 (+62%)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full max-w-md bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-2">
                Projected Growth (12 Months)
              </div>
              <div className="text-5xl font-bold text-white mb-2">+62%</div>
              <div className="text-xs text-slate-500">
                *Based on historical 5% monthly performance. Past results do not
                guarantee future performance.
              </div>
            </div>
            <div className="mt-8 h-32 flex items-end justify-between gap-2">
              {[20, 35, 45, 60, 75, 90, 100].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-blue-600/20 rounded-t-sm relative group"
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm transition-all duration-1000"
                    style={{ height: `${h}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="process" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Onboarding Process
            </h2>
          </div>

          <div className="space-y-8">
            <Step
              num="01"
              title="Documentation"
              desc="Provide IC/Passport and proof of address for compliance verification."
            />
            <Step
              num="02"
              title="Capital Decision"
              desc="Confirm your initial investment amount (Recommended Minimum: RM 3,000 - RM 5,000)."
            />
            <Step
              num="03"
              title="Account Setup"
              desc="We create a trading account under your name with investor password access."
            />
            <Step
              num="04"
              title="Fund Transfer"
              desc="Capital is deposited directly into your personal trading account. You retain full control."
            />
            <Step
              num="05"
              title="Algorithm Launch"
              desc="Trading begins immediately with full monitoring capability via the MT4/MT5 app."
            />
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setView("register")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-900/20"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// --- Registration Form (Email Submission) ---
function RegistrationForm({ setView }) {
  const [loading, setLoading] = useState(false);
  const [formDataState, setFormDataState] = useState({
    fullName: "",
    email: "",
    phone: "",
    capital: "",
    icFileFront: null,
    icFileBack: null,
    addressFile: null,
  });
  const [errors, setErrors] = useState({});

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB Limit per file for email
        setErrors((prev) => ({ ...prev, [field]: "File too large. Max 5MB." }));
        return;
      }
      setErrors((prev) => ({ ...prev, [field]: null }));
      setFormDataState((prev) => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic Validation
    const newErrors = {};
    if (!formDataState.fullName) newErrors.fullName = "Full Name is required";
    if (!formDataState.email) newErrors.email = "Email is required";
    if (!formDataState.capital)
      newErrors.capital = "Capital amount is required";
    if (!formDataState.icFileFront)
      newErrors.icFileFront = "ID (Front) is required";
    if (!formDataState.icFileBack)
      newErrors.icFileBack = "ID (Back) is required";
    if (!formDataState.addressFile)
      newErrors.addressFile = "Proof of Address is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Create FormData for FormSubmit
      const submissionData = new FormData();
      submissionData.append("name", formDataState.fullName);
      submissionData.append("email", formDataState.email); // Customer email
      submissionData.append("phone", formDataState.phone);
      submissionData.append("capital", formDataState.capital);

      // Append files
      if (formDataState.icFileFront)
        submissionData.append("IC_Front", formDataState.icFileFront);
      if (formDataState.icFileBack)
        submissionData.append("IC_Back", formDataState.icFileBack);
      if (formDataState.addressFile)
        submissionData.append("Address_Proof", formDataState.addressFile);

      // Disable captcha
      submissionData.append("_captcha", "false");
      submissionData.append(
        "_subject",
        "New GS Algo Application: " + formDataState.fullName
      );
      submissionData.append("_template", "table");

      // Send to FormSubmit
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        body: submissionData,
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setLoading(false);
        setView("success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({
        form: "Submission failed. Please check your internet or try again.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
        <button
          onClick={() => setView("landing")}
          className="text-slate-500 hover:text-white mb-6 flex items-center gap-2 text-sm"
        >
          ← Back to Home
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">
          Investor Application
        </h2>
        <p className="text-slate-400 mb-8">
          Securely submit your details to open your algorithmic trading account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Full Name (as per ID)"
              value={formDataState.fullName}
              onChange={(e) =>
                setFormDataState({ ...formDataState, fullName: e.target.value })
              }
              error={errors.fullName}
              placeholder="e.g. John Doe"
            />
            <InputField
              label="Phone Number"
              value={formDataState.phone}
              onChange={(e) =>
                setFormDataState({ ...formDataState, phone: e.target.value })
              }
              placeholder="+60 12 345 6789"
            />
          </div>

          <InputField
            label="Email Address"
            type="email"
            value={formDataState.email}
            onChange={(e) =>
              setFormDataState({ ...formDataState, email: e.target.value })
            }
            error={errors.email}
            placeholder="john@example.com"
          />

          <InputField
            label="Intended Capital Investment (RM)"
            type="number"
            value={formDataState.capital}
            onChange={(e) =>
              setFormDataState({ ...formDataState, capital: e.target.value })
            }
            error={errors.capital}
            placeholder="Recommended: 5000"
          />

          <div className="h-px bg-slate-800 my-6"></div>

          {/* File Uploads */}
          <h3 className="text-lg font-semibold text-white mb-4">
            Document Verification
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <FileUpload
              label="ID / Passport (Front)"
              sublabel="Clear photo, no glare."
              onChange={(e) => handleFileChange(e, "icFileFront")}
              file={formDataState.icFileFront}
              error={errors.icFileFront}
            />

            <FileUpload
              label="ID / Passport (Back)"
              sublabel="Ensure text is readable."
              onChange={(e) => handleFileChange(e, "icFileBack")}
              file={formDataState.icFileBack}
              error={errors.icFileBack}
            />
          </div>

          <FileUpload
            label="Proof of Address (Required)"
            sublabel="Utility bill or bank statement (Max 3 months old)."
            onChange={(e) => handleFileChange(e, "addressFile")}
            file={formDataState.addressFile}
            error={errors.addressFile}
          />

          {/* Disclaimer */}
          <div className="bg-blue-900/20 border border-blue-900/50 p-4 rounded-lg flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-200/70 leading-relaxed">
              By submitting this form, you acknowledge that trading involves
              risk. Past performance is not indicative of future results. You
              understand that your capital is at risk and agree to the terms of
              service.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              loading
                ? "bg-slate-700 text-slate-400"
                : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20"
            }`}
          >
            {loading ? "Submitting secure form..." : "Submit Application"}
          </button>

          {errors.form && (
            <p className="text-red-400 text-center text-sm">{errors.form}</p>
          )}
        </form>
      </div>
    </div>
  );
}

// --- Success View ---
function SuccessView({ setView }) {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 bg-slate-950">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Application Received
        </h2>
        <p className="text-slate-400 mb-8">
          Thank you for trusting GS Algo. We have received your documents and
          application details securely. Our team will verify your information
          and contact you via WhatsApp/Email within 24 hours to finalize your
          account setup.
        </p>
        <button
          onClick={() => setView("landing")}
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}

// --- Helper Components ---

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
      <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
      <div className="flex-shrink-0 text-5xl font-black text-slate-800 select-none">
        {num}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function InputField({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        className={`w-full bg-slate-950 border ${
          error ? "border-red-500" : "border-slate-700"
        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

function FileUpload({ label, sublabel, onChange, file, error }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      <div
        className={`relative border-2 border-dashed ${
          error
            ? "border-red-500/50 bg-red-500/5"
            : "border-slate-700 bg-slate-800/30"
        } rounded-xl p-6 text-center hover:bg-slate-800/50 transition-colors`}
      >
        <input
          type="file"
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*,.pdf"
        />
        <div className="flex flex-col items-center gap-2 pointer-events-none">
          {file ? (
            <>
              <FileText className="w-8 h-8 text-emerald-500" />
              <span className="text-emerald-400 font-medium text-sm truncate max-w-[200px]">
                {file.name}
              </span>
            </>
          ) : (
            <>
              <Upload className="w-8 h-8 text-slate-500" />
              <span className="text-slate-400 font-medium text-sm">
                Click to upload
              </span>
              <span className="text-slate-600 text-xs">{sublabel}</span>
            </>
          )}
        </div>
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-600 text-sm mb-4">
          Trading in financial markets involves a high degree of risk and may
          not be suitable for all investors.
        </p>
        <p className="text-slate-700 text-xs">
          © 2025 GS Algo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
