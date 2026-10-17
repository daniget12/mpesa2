import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sliders, 
  FastForward, 
  RotateCcw, 
  User, 
  Store, 
  Shield, 
  Ticket, 
  CreditCard, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp,
  Play,
  X
} from 'lucide-react';

export const DemoDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    role, 
    setRole, 
    triggerDemoState, 
    fastForwardReservation, 
    fastForwardPickup, 
    resetAllDemoData,
    reservationSecondsLeft,
    pickupSecondsLeft,
    activeClaim
  } = useApp();

  return (
    <>
      {/* Floating Demo Controls Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-3 right-3 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Demo Controls"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-900/95 hover:bg-slate-800 text-white text-xs font-bold rounded-full shadow-2xl border border-slate-700/80 backdrop-blur-md transition-all active:scale-95 group"
        >
          <Sliders className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-45 transition-transform" />
          <span>Demo Controls</span>
          {isOpen ? <ChevronDown className="w-3 h-3 text-slate-400" /> : <ChevronUp className="w-3 h-3 text-slate-400" />}
        </button>
      </div>

      {/* Drawer Overlay & Panel */}
      {isOpen && (
        <div className="fixed bottom-16 right-3 z-50 w-80 sm:w-88 max-h-[82vh] overflow-y-auto bg-slate-900 text-white rounded-3xl p-4 shadow-2xl border border-slate-700/90 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Hackathon Jury Controls
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-4 text-xs">
            {/* ROLE SWITCHER */}
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block mb-1.5">
                Switch Perspective
              </span>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700">
                <button
                  onClick={() => {
                    setRole('customer');
                    triggerDemoState('customer_home');
                  }}
                  className={`py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1 transition-all ${
                    role === 'customer'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-3 h-3" />
                  <span>Customer</span>
                </button>
                <button
                  onClick={() => {
                    setRole('merchant');
                    triggerDemoState('merchant_dashboard');
                  }}
                  className={`py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1 transition-all ${
                    role === 'merchant'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Store className="w-3 h-3" />
                  <span>Merchant</span>
                </button>
                <button
                  onClick={() => {
                    setRole('admin');
                    triggerDemoState('admin_dashboard');
                  }}
                  className={`py-1.5 px-2 rounded-lg font-bold flex items-center justify-center gap-1 transition-all ${
                    role === 'admin'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Shield className="w-3 h-3" />
                  <span>Admin</span>
                </button>
              </div>
            </div>

            {/* QUICK JUMP TO VOUCHER STATES */}
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block mb-1.5">
                Voucher States & Screens
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => triggerDemoState('customer_home')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  1. Home Deals
                </button>
                <button
                  onClick={() => triggerDemoState('deal_detail')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  2. Deal Detail
                </button>
                <button
                  onClick={() => triggerDemoState('reserved')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  3. Reserved (5m hold)
                </button>
                <button
                  onClick={() => triggerDemoState('paying')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  4. M-PESA STK Prompt
                </button>
                <button
                  onClick={() => triggerDemoState('paid')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left font-semibold text-emerald-400 hover:text-emerald-300 transition-colors col-span-2"
                >
                  ✨ 5. Voucher Screen (Magic Moment)
                </button>
                <button
                  onClick={() => triggerDemoState('expired_hold')}
                  className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-left text-slate-300 transition-colors"
                >
                  State: Hold Expired
                </button>
                <button
                  onClick={() => triggerDemoState('sold_out')}
                  className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-left text-slate-300 transition-colors"
                >
                  State: Sold Out
                </button>
                <button
                  onClick={() => triggerDemoState('payment_failed')}
                  className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-left text-rose-300 transition-colors"
                >
                  State: M-PESA Failed
                </button>
                <button
                  onClick={() => triggerDemoState('expired_pickup')}
                  className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-left text-amber-300 transition-colors"
                >
                  State: Pickup Expired
                </button>
                <button
                  onClick={() => triggerDemoState('too_many_claims')}
                  className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-left text-slate-300 transition-colors col-span-2"
                >
                  Rule: 2 Active Claims Limit
                </button>
              </div>
            </div>

            {/* REAL-TIME TIMERS FAST-FORWARD BUTTONS */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block mb-1.5">
                Simulated Timers Fast-Forward
              </span>
              <div className="space-y-1.5">
                <button
                  onClick={fastForwardReservation}
                  className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-amber-300 font-bold flex items-center justify-between border border-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <FastForward className="w-3.5 h-3.5" />
                    <span>Fast-forward 5m hold (to 10s)</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{reservationSecondsLeft}s</span>
                </button>

                <button
                  onClick={fastForwardPickup}
                  className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-emerald-300 font-bold flex items-center justify-between border border-slate-700 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <FastForward className="w-3.5 h-3.5" />
                    <span>Fast-forward pickup (triggers refund due)</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {Math.floor(pickupSecondsLeft / 60)}m
                  </span>
                </button>
              </div>
            </div>

            {/* RESET ALL DATA */}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  resetAllDemoData();
                  setIsOpen(false);
                }}
                className="w-full py-2.5 px-3 bg-rose-950/60 hover:bg-rose-900 border border-rose-800/80 text-rose-200 font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Demo to Clean State</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
